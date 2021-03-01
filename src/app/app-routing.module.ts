import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageHomeComponent } from './mainpage-home/mainpage-home.component';
import { MainpageProjectsComponent } from './mainpage-projects/mainpage-projects.component';
import { MainpageContactComponent } from './mainpage-contact/mainpage-contact.component';
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
import { ChFifteenYoutubeOnRepeatComponent } from './mainpage-projects/ch-fifteen-youtube-on-repeat/ch-fifteen-youtube-on-repeat.component';
import { ChSixteenRESTCountriesApiColorThemeSwitcherComponent } from './mainpage-projects/ch-sixteen-rest-countries-api-color-theme-switcher/ch-sixteen-rest-countries-api-color-theme-switcher.component';
import { CountriesMainGridComponent } from './mainpage-projects/ch-sixteen-rest-countries-api-color-theme-switcher/countries-main-grid/countries-main-grid.component';
import { IndividualCountryComponent } from './mainpage-projects/ch-sixteen-rest-countries-api-color-theme-switcher/individual-country/individual-country.component';
import { ChSeventeenRockPaperScissorsLizardSpockGameComponent } from './mainpage-projects/ch-seventeen-rock-paper-scissors-lizard-spock-game/ch-seventeen-rock-paper-scissors-lizard-spock-game.component';


const routes: Routes = [
  {path: '', component: MainpageHomeComponent},
  {path: 'projects', component: MainpageProjectsComponent},
  
  {path: 'projects/FEM-four-card-feature-section', component: ChOneFourCardFeatureSectionComponent},
  {path: 'projects/FEM-ping-coming-soon-page-master', component: ChTwoPingSingleColumnComingSoonPageComponent},
  {path: 'projects/FEM-huddle-landing-page-with-alternating-feature-blocks-master', component: ChThreeHuddleLandingPageWithAlternatingFeatureBlocksComponent},
  {path: 'projects/FEM-single-price-grid-component-master', component: ChFourSinglePriceGridComponent},
  {path: 'projects/FEM-base-apparel-coming-soon-master', component: ChFiveBaseApparelComingSoonComponent},
  {path: 'projects/FEM-intro-component-with-signup-form-master', component: ChSixIntroComponentWithSignUpFormComponent},
  {path: 'projects/FEM-url-shortening-api-master', component: ChSevenUrlShorteningApiMasterPageComponent},
  {path: 'projects/FEM-fylo-data-storage', component: ChEightFyloDataStorageComponentComponent},
  {path: 'projects/FEM-article-preview-component', component: ChNineArticlePreviewComponentComponent},
  {path: 'projects/FEM-coding-bootcamp-testimonials-slider', component: ChTenCodingBootcampTestimonialsSliderComponent},
  {path: 'projects/FEM-huddle-landing-page-single-introduction-section', component: ChElevenHuddleLandingPageWithSgIntrSectionComponent},
  {path: 'projects/FEM-fylo-landing-page-with-two-column-layout', component: ChTwelveFyloLandingPageWithTwoColumnLayoutComponent},
  {path: 'projects/FEM-static-job-listings-master', component: ChThirteenStaticJobListingsMasterComponent},
  {path: 'projects/FEM-ip-address-tracker', component: ChFourteenIPAddressTrackerComponent},
  {path: 'projects/youtube-on-repeat', component: ChFifteenYoutubeOnRepeatComponent},
  {path: 'projects/FEM-rest-countries-api-with-color-theme-switcher', component: ChSixteenRESTCountriesApiColorThemeSwitcherComponent, children: [
    {path: '', component: CountriesMainGridComponent},
    {path: 'country/:country', component: IndividualCountryComponent}
  ]},
  {path: 'projects/FEM-rock-paper-scissors-lizard-spock-game', component: ChSeventeenRockPaperScissorsLizardSpockGameComponent},
  {path: 'contact', component: MainpageContactComponent},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
