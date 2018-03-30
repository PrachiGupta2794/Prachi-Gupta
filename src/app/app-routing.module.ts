import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyHome } from './components/home/home.component'
import { MyContact } from './components/contact-me/contact-me.component'
import { AboutMe } from './components/about-me/about-me.component';
import { DownloadResume } from './components/download-resume/download-resume.component';

const routes: Routes = [
    { path: 'home', component: MyHome },
    { path: 'contact', component: MyContact },
    { path: 'aboutme', component: AboutMe},
    { path: 'download', component: DownloadResume},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
