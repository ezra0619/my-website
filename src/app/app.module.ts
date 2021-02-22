import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageNavbarComponent } from './mainpage-navbar/mainpage-navbar.component';
import { MainpageHomeComponent } from './mainpage-home/mainpage-home.component';
import { MainpageProjectsComponent } from './mainpage-projects/mainpage-projects.component';
import { MainpageContactComponent } from './mainpage-contact/mainpage-contact.component';
import { MainpageContactFormComponent } from './mainpage-contact/mainpage-contact-form/mainpage-contact-form.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChOneFourCardFeatureSectionComponent } from './mainpage-projects/ch-one-four-card-feature-section/ch-one-four-card-feature-section.component';
import { ChTwoPingSingleColumnComingSoonPageComponent } from './mainpage-projects/ch-two-ping-single-column-coming-soon-page/ch-two-ping-single-column-coming-soon-page.component';
import { ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent } from './mainpage-projects/ch-three-huddle-landing-page-with-alternating-feature-blocks/ch-three-huddle-landing-page-with-alternating-feature-blocks.component';
import { ChFourSinglePriceGridComponent } from './mainpage-projects/ch-four-single-price-grid/ch-four-single-price-grid.component';
import { ChFiveBaseApparelComingSoonComponent } from './mainpage-projects/ch-five-base-apparel-coming-soon/ch-five-base-apparel-coming-soon.component';
import { ChSixIntroComponentWithSignUpFormComponent } from './mainpage-projects/ch-six-intro-component-with-sign-up-form/ch-six-intro-component-with-sign-up-form.component';
import { ChSevenUrlShorteningApiMasterPageComponent } from './mainpage-projects/ch-seven-url-shortening-api-master-page/ch-seven-url-shortening-api-master-page.component';
import { ChEightFyloDataStorageComponentComponent } from './mainpage-projects/ch-eight-fylo-data-storage-component/ch-eight-fylo-data-storage-component.component';
import { ChNineArticlePreviewComponentComponent } from './mainpage-projects/ch-nine-article-preview-component/ch-nine-article-preview-component.component';
import { ChTenCodingBootcampTestimonialsSliderComponent } from './mainpage-projects/ch-ten-coding-bootcamp-testimonials-slider/ch-ten-coding-bootcamp-testimonials-slider.component';
import { ChElevenHuddleLandingPageWithSgIntrSectionComponent } from './mainpage-projects/ch-eleven-huddle-landing-page-with-sg-intr-section/ch-eleven-huddle-landing-page-with-sg-intr-section.component';
import { ChTwelveFyloLandingPageWithTwoColumnLayoutComponent } from './mainpage-projects/ch-twelve-fylo-landing-page-with-two-column-layout/ch-twelve-fylo-landing-page-with-two-column-layout.component';
import { ChThirteenStaticJobListingsMasterComponent } from './mainpage-projects/ch-thirteen-static-job-listings-master/ch-thirteen-static-job-listings-master.component';
import { ChFourteenIPAddressTrackerComponent } from './mainpage-projects/ch-fourteen-ip-address-tracker/ch-fourteen-ip-address-tracker.component';
import { PipeSafeLink } from './mainpage-projects/ch-fourteen-ip-address-tracker/safeLink.pipe';
import { ChFifteenYoutubeOnRepeatComponent } from './mainpage-projects/ch-fifteen-youtube-on-repeat/ch-fifteen-youtube-on-repeat.component';
import { FilterPipe } from './mainpage-projects/ch-thirteen-static-job-listings-master/filter.pipe';
import { ChSixteenRESTCountriesApiColorThemeSwitcherComponent } from './mainpage-projects/ch-sixteen-rest-countries-api-color-theme-switcher/ch-sixteen-rest-countries-api-color-theme-switcher.component';
import { CountriesMainGridComponent } from './mainpage-projects/ch-sixteen-rest-countries-api-color-theme-switcher/countries-main-grid/countries-main-grid.component';
import { IndividualCountryComponent } from './mainpage-projects/ch-sixteen-rest-countries-api-color-theme-switcher/individual-country/individual-country.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageNavbarComponent,
    MainpageHomeComponent,
    MainpageProjectsComponent,
    MainpageContactComponent,
    MainpageContactFormComponent,
    PageNotFoundComponent,
    ChOneFourCardFeatureSectionComponent,
    ChTwoPingSingleColumnComingSoonPageComponent,
    ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent,
    ChFourSinglePriceGridComponent,
    ChFiveBaseApparelComingSoonComponent,
    ChSixIntroComponentWithSignUpFormComponent,
    ChSevenUrlShorteningApiMasterPageComponent,
    ChEightFyloDataStorageComponentComponent,
    ChNineArticlePreviewComponentComponent,
    ChTenCodingBootcampTestimonialsSliderComponent,
    ChElevenHuddleLandingPageWithSgIntrSectionComponent,
    ChTwelveFyloLandingPageWithTwoColumnLayoutComponent,
    ChThirteenStaticJobListingsMasterComponent,
    ChFourteenIPAddressTrackerComponent,
    PipeSafeLink,
    ChFifteenYoutubeOnRepeatComponent,
    FilterPipe,
    ChSixteenRESTCountriesApiColorThemeSwitcherComponent,
    CountriesMainGridComponent,
    IndividualCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
