<script setup>
import { 
    NSpace, 
    NCarousel, 
    NButton,
    NIcon,
    NCard,
    NList,
    NListItem,
    NAvatar,
    NEllipsis,
    NRate
}                       from 'naive-ui';
import Search           from '../components/Search.vue';

// Top books data for 4x2 grid
const topBooks = [
  { id: 1, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', cover: '/books/dac-nhan-tam.webp' },
  { id: 2, title: 'Mắt biếc', author: 'Nguyễn Nhật Ánh', cover: '/books/mat-biec.jpg' },
  { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', cover: '/books/harryposter.webp' },
  { id: 4, title: 'Tâm lý học', author: 'Nhiều tác giả', cover: '/books/tam-li-hoc.png' },
  { id: 5, title: 'Truyện ngắn', author: 'Nhiều tác giả', cover: '/books/truyen-ngan.png' },
  { id: 6, title: 'Truyện tranh', author: 'Nhiều tác giả', cover: '/books/truyen-tranh.png' },
  { id: 7, title: 'Tâm lý học (bản webp)', author: 'Nhiều tác giả', cover: '/books/tam-li-hoc.webp' },
  { id: 8, title: 'Tác phẩm nổi bật', author: 'Nhiều tác giả', cover: '/books/dac-nhan-tam.webp' },
];
</script>


<template>
    <NSpace vertical class="min-h-screen flex dark:bg-gray-800">
        <NSpace class="relative" justify="center" align="center" >
            <n-carousel class="" show-arrow autoplay>
                <img
                class="carousel-img lg:h-[80vh] h-[30vh]"
                src="/banner/banner1.png"
                >
                <img
                class="carousel-img lg:h-[80vh] h-[30vh]"
                src="/banner/banner2.png"
                >
                <img
                class="carousel-img lg:h-[80vh] h-[30vh]"
                src="/banner/banner3.png"
                >
                <template #arrow="{ prev, next }">
                <div class="custom-arrow">
                    <button type="button" class="custom-arrow--left" @click="prev">
                    <n-icon>
                        <i class="fa-solid fa-arrow-left"></i>
                    </n-icon>
                    </button>
                    <button type="button" class="custom-arrow--right" @click="next">
                    <n-icon>
                        <i class="fa-solid fa-arrow-right"></i>
                    </n-icon>
                    </button>
                </div>
                </template>
                <template #dots="{ total, currentIndex, to }">
                <ul class="custom-dots">
                    <li
                    v-for="index of total"
                    :key="index"
                    :class="{ ['is-active']: currentIndex === index - 1 }"
                    @click="to(index - 1)"
                    />
                </ul>
                </template>
            </n-carousel>
            <div class="flex justify-between items-center absolute inset-x-0 -bottom-8 flex-1 px-[10%]">
                <Search />
            </div>
        </NSpace>
        <!-- <NSpace vertical justify="center" class="min-h-screen">
          <NSpace class="py-32 bg-[url('/banner/banner4.png')]" vertical justify="center" align="center">
            <div class="flex space-x-2 animate__animated animate__bounce">
                <span class="text-7xl text-orange-500 uppercase">W</span>
                <span class="text-7xl text-blue-500 uppercase">E</span>
                <span class="text-7xl text-green-500 uppercase">L</span>
                <span class="text-7xl text-orange-500 uppercase">C</span>
                <span class="text-7xl text-orange-500 uppercase">O</span>
                <span class="text-7xl text-orange-500 uppercase">M</span>
                <span class="text-7xl text-orange-500 uppercase">E</span>
            </div>
            <h3 class="max-w-2xl text-lg text-center italic font-medium text-gray-200">
                Thư viện của hieurury hi vọng sẽ đem đến cho bạn những trải nghiệm tuyệt vời!
                Đến với chúng tôi để khám phá kho tàng tri thức vô tận.
            </h3>
            <NButton color="orange" size="large">Xem ngay</NButton>
          </NSpace>
        </NSpace> -->
        <NSpace class="min-h-screen lg:px-0 px-2" justify="center" align="center" vertical>
          <h1 class="lg:text-6xl text-4xl uppercase text-gray-600 dark:text-gray-300 font-semibold">Top thể loại được quan tâm nhất</h1>
          <div class="py-8 grid lg:grid-cols-3 grid-cols-3" justify="center" align="center" wrap>
            <NCard>
              <template #cover>
                <img class="lg:w-96 lg:h-96 w-48 h-48 object-cover" src="/books/tam-li-hoc.png" alt="">
              </template>
            </NCard>
            <NCard>
              <template #cover>
                <img class="lg:w-96 lg:h-96 w-48 h-48 object-cover" src="/books/truyen-ngan.png" alt="">
              </template>
            </NCard>
            <NCard>
              <template #cover>
                <img class="lg:w-96 lg:h-96 w-48 h-48 object-cover" src="/books/truyen-tranh.png" alt="">
              </template>
            </NCard>
          </div>
          <NButton color="orange" size="large">
            <NIcon><i class="fa-solid fa-arrow-right"></i></NIcon>
            <span>Xem thêm hơn 20+ loại sách</span>
          </NButton>
        </NSpace>
        <!--  -->
        <NSpace class="min-h-screen px-2 lg:px-0" justify="center" align="center" vertical>
          <h1 class="lg:text-6xl text-4xl uppercase text-gray-600 dark:text-gray-300 font-semibold">Top sách được yêu thích nhất</h1>
          <div class="py-8 grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <NCard
              v-for="book in topBooks"
              :key="book.id"
              class="w-72"
              hoverable
            >
              <template #cover>
                <img class="w-72 h-72 object-cover" :src="book.cover" :alt="book.title">
              </template>
              <h3 class="text-xl font-semibold mt-2 truncate">{{ book.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 italic">Tác giả: {{ book.author }}</p>
            </NCard>
          </div>
          <NButton type="info" size="large">
            <NIcon><i class="fa-solid fa-arrow-right"></i></NIcon>
            <span>Xem thêm hơn 200+ sách</span>
          </NButton>
        </NSpace>
        <!-- rate -->
        <NSpace class="min-h-screen px-2 lg:px-0 bg-gray-700" justify="center" align="center" vertical>
          <h1 class="lg:text-6xl text-4xl uppercase text-gray-200 dark:text-gray-300 font-semibold">Đánh giá từ người dùng</h1>
          <div class="py-8 grid justify-items-center grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6">
            <Ncard class="shadow p-2 bg-white dark:bg-transparent rounded">
              <NSpace align="center">
                <NAvatar src="/users/user1.png"/>
                <h4 class="text-2xl font-semibold dark:text-gray-300">Đỗ Quốc Việt</h4>
              </NSpace>
              <NSpace justify="center" class="my-2">
                <NEllipsis line-clamp="3" class="max-w-lg text-lg text-gray-600 dark:text-gray-300">
                  Chất lượng dịch vụ rất tốt. Quy trình mượn và trả sách nhanh chóng.Chất lượng dịch vụ rất tốt. Quy trình mượn và trả sách nhanh chóng.
                </NEllipsis>
              </NSpace>
              <NSpace>
                <NRate readonly default-value="5"></Nrate>
              </NSpace>
            </Ncard>

            <Ncard class="shadow p-2 bg-white dark:bg-transparent rounded">
              <NSpace align="center">
                <NAvatar src="/users/user1.png"/>
                <h4 class="text-2xl font-semibold dark:text-gray-300">Đỗ Quốc Việt</h4>
              </NSpace>
              <NSpace justify="center" class="my-2">
                <NEllipsis line-clamp="3" class="max-w-lg text-lg text-gray-600 dark:text-gray-300">
                  Chất lượng dịch vụ rất tốt. Quy trình mượn và trả sách nhanh chóng.
                </NEllipsis>
              </NSpace>
              <NSpace>
                <NRate readonly default-value="5"></Nrate>
              </NSpace>
            </Ncard>

            <Ncard class="shadow p-2 bg-white dark:bg-transparent rounded">
              <NSpace align="center">
                <NAvatar src="/users/user1.png"/>
                <h4 class="text-2xl font-semibold dark:text-gray-300">Đỗ Quốc Việt</h4>
              </NSpace>
              <NSpace justify="center" class="my-2">
                <NEllipsis line-clamp="3" class="max-w-lg text-lg text-gray-600 dark:text-gray-300">
                  Chất lượng dịch vụ rất tốt. Quy trình mượn và trả sách nhanh chóng.
                </NEllipsis>
              </NSpace>

              <NSpace>
                <NRate readonly default-value="5"></Nrate>
              </NSpace>
            </Ncard>
            <Ncard class="shadow p-2 bg-white dark:bg-transparent rounded">
              <NSpace align="center">
                <NAvatar src="/users/user1.png"/>
                <h4 class="text-2xl font-semibold dark:text-gray-300">Đỗ Quốc Việt</h4>
              </NSpace>
              <NSpace justify="center" class="my-2">
                <NEllipsis line-clamp="3" class="max-w-lg text-lg text-gray-600 dark:text-gray-300">
                  Chất lượng dịch vụ rất tốt. Quy trình mượn và trả sách nhanh chóng.
                </NEllipsis>
              </NSpace>
              <NSpace>
                <NRate readonly default-value="5"></Nrate>
              </NSpace>
            </Ncard>
          </div>
        </NSpace>
    </NSpace>
</template>
<style scoped>

.carousel-img {
  width: 100%;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>