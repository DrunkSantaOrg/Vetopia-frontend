import React from 'react'
import './Dashboard.css'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const DashboardContent = () => {
  return (
    <div className="dashboardContent">
      <div className="dashboardContent__main">
        <div className="dbc_review">
          <section class="div-2">
            <article class="column">
              <div class="div-3">
                <h1 class="div-4">Discover Trustworthy Veterinary Care!</h1>
                <p class="div-5">
                  Explore Reviews, Share Your Experience! Unlock the key to
                  reliable pet care by diving into reviews. Your journey starts
                  with reading and writing reviews – the bridge to finding a vet
                  you can truly trust.
                </p>
                <button class="div-6">Check it out</button>
              </div>
            </article>
            <article class="column-2">
              <img
                loading="lazy"
                srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ad38cee08eb763686b48689128aae46ad7afea995fab6bbb2dd0960300ff3d0?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
                class="img"
              />
            </article>
          </section>
        </div>
        <div className="dbc_calendar">
          <header class="date">Nov 27</header>
          <div class="appointment-container">
            <div class="appointment">
              <div class="dbc_calendar_title">Meet w/ Dr. Simple</div>
              <div class="time">Dec 12 2:00pm</div>
            </div>
          </div>

          <div class="appointment-container">
            <div class="appointment">
              <div class="dbc_calendar_title">Meet w/ Dr. Simple</div>
              <div class="time">Dec 12 2:00pm</div>
            </div>
          </div>

          <div class="appointment-container">
            <div class="appointment">
              <div class="dbc_calendar_title">Meet w/ Dr. Simple</div>
              <div class="time">Dec 12 2:00pm</div>
            </div>
          </div>

          <div class="view-appointments">
            <a href="#" class="view-appointments-link">
              View all Appointments<span className="icon-Right"></span>
            </a>
          </div>
        </div>
        <div className="dbc_graph"></div>
        <div className="dbc_pets">
          <header class="pets-header">Your Pets</header>
          <section class="pet-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bf270f0993c37535a7e108efe10688029c1064871fba4663011739869653cf?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
              class="pet-image-left"
              alt="Snow"
            />
            <div className="pet-info-right">
            <div class="pet-info">
              <div class="pet-name">Snow</div>
              <div class="pet-age">5 years old</div>
            </div>
            <div class="pet-type">Dog</div>
            </div>
          </section>
          <section class="pet-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bfd89b7892bceec7ab22619537106a67e7f352eb1a6d28033d44d127dc06a00?apiKey=8b5dd71ebe6f4264b1932bb4f8ecafa7&"
              class="pet-image-left"
              alt="Snow"
            />
            <div className="pet-info-right">
            <div class="pet-info">
              <div class="pet-name">Snow</div>
              <div class="pet-age">5 years old</div>
            </div>
            <div class="pet-type">Dog</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default DashboardContent
