<script setup lang="ts">
import heroImage from '../assets/image/Bún mì chay nấu bằng tâm.webp'
import storyImage from '../assets/image/Câu Chuyện Mimi.webp'
import nuocLeo from '../assets/image/Nước lèo thanh khiết.webp'
import damVi from '../assets/image/Đậm vị gia truyền.webp'
import viCay from '../assets/image/Vị cay xứ Huế.webp'
import thanhMat from '../assets/image/Thanh mát mùa hè.webp'
import binhDi from '../assets/image/Bình dị, ấm lòng.webp'

const menu = [
  { eyebrow: 'NƯỚC LÈO THANH KHIẾT', name: 'Hủ tiếu chay', price: '25.000đ', image: nuocLeo },
  { eyebrow: 'SỢI MÌ DẺO DAI', name: 'Mì tươi chay', price: '26.000đ', image: storyImage },
  { eyebrow: 'ĐẬM VỊ GIA TRUYỀN', name: 'Mì gói chay', price: '25.000đ', image: damVi },
  { eyebrow: 'VỊ CAY ĐẬM ĐÀ · XỨ HUẾ', name: 'Bún bò Huế chay', price: '27.000đ', image: viCay },
  { eyebrow: 'THANH MÁT MÙA HÈ', name: 'Miến măng chay', price: '26.000đ', image: thanhMat },
  { eyebrow: 'BÌNH DỊ, ẤM LÒNG', name: 'Bún măng chay', price: '25.000đ', image: binhDi }
]

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <v-app>
    <v-main>
      <section id="home" class="hero">
        <div class="hero-copy">
          <p class="eyebrow">QUÁN CHAY MIMI · BẾP THIỀN LÀNH</p>
          <h1>Thuần Khiết.<br><em>Đậm Đà.</em></h1>
          <p class="hero-desc">Bún mì chay bằng tâm — nước lèo hầm từ<br class="desktop-only"> nấm &amp; rau củ tự nhiên, không hành tỏi. Chỉ cần<br class="desktop-only"> thưởng duyên bạn.</p>
          <div class="hero-actions">
            <button class="btn-primary" @click="scrollTo('#menu')">XEM THỰC ĐƠN</button>
            <button class="btn-outline" @click="scrollTo('#story')">CÂU CHUYỆN MIMI</button>
          </div>
        </div>
        <div class="hero-photo">
          <img :src="heroImage" alt="Món chay MIMI">
        </div>
        <button class="scroll-cue" @click="scrollTo('#menu')">
          <span>CUỘN XUỐNG</span><b>⌄</b>
        </button>
      </section>

      <section id="menu" class="menu-section">
        <v-container class="content-width">
          <div class="menu-heading">
            <div>
              <p class="eyebrow">THỰC ĐƠN CHAY</p>
              <h2>Sáu tô, <em>một tâm</em></h2>
            </div>
            <p class="menu-intro">Mỗi món là một hành trình của vị giác — từ<br>nước lèo sâu đậm đến sợi bún đậm đà. Chạm để<br>mở hồ sơ nguyên liệu.</p>
          </div>

          <v-row class="menu-grid" no-gutters>
            <v-col v-for="item in menu" :key="item.name" cols="12" sm="6" md="4" class="menu-item">
              <article>
                <div class="dish-image">
                  <img :src="item.image" :alt="item.name">
                  <button class="plus">+</button>
                </div>
                <p class="dish-eyebrow">{{ item.eyebrow }}</p>
                <h3>{{ item.name }}</h3>
                <p class="price">{{ item.price }}</p>
              </article>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="story" class="story-section">
        <v-container class="content-width">
          <v-row align="center">
            <v-col cols="12" md="6" class="story-photo-col">
              <div class="story-photo">
                <div class="soft-circle circle-a"></div>
                <div class="soft-circle circle-b"></div>
                <img :src="storyImage" alt="Câu chuyện MIMI">
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="story-copy">
                <p class="eyebrow">CÂU CHUYỆN MIMI</p>
                <h2>Bếp nhà, <em>ếp lành</em></h2>
                <p>MIMI bắt đầu từ một góc bếp nhỏ, nơi bận bữa ăn được nấu bằng mỗi duyên. Không hành tỏi — chỉ nấm hương, cà chua, và tình gian.</p>
                <p>Chúng tôi giữ nguyên cách nấu ấy: nước lèo hầm chậm, topping cắt tay, gia vị chay thuần khiết. Mỗi tô là một lời chúc lành dành cho người thưởng thức và cho muôn loài.</p>
                <div class="stats">
                  <div><strong>100%</strong><span>THUẦN CHAY</span></div>
                  <div><strong>6</strong><span>MÓN NẤU TAY</span></div>
                  <div><strong>06–20H</strong><span>MỞ CỬA</span></div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="contact" class="visit-bar">
        <button> Xem thực đơn tại quán </button>
        <button class="delivery">Đặt giao tận nơi</button>
      </section>

      <footer>
        <v-container class="content-width footer-content">
          <div class="footer-main">
            <div>
              <h4>QUÁN CHAY MIMI</h4>
              <p>Thuần khiết. Đậm đà. Bếp thiền lành giữa lòng<br>thành phố.</p>
            </div>
            <div class="footer-info">
              <p>◉ &nbsp; Xem vị trí trên Google Maps ↗</p>
              <p>◉ &nbsp; 0986 284 748</p>
              <p>◉ &nbsp; 06:00–20:00 · Mở cả tuần</p>
            </div>
            <div class="social">
              <span>THEO DÕI MIMI</span>
              <div><b>◎</b><b>f</b></div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Quán Chay Mimi. Mọi quyền được bảo lưu.</span>
            <span>NẤU BẰNG TÂM · PHỤC VỤ BẰNG AN</span>
          </div>
        </v-container>
      </footer>
    </v-main>
  </v-app>
</template>
