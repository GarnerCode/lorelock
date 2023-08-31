import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

import CampaignsView from '@/views/dashboard-views/CampaignsView.vue'
import CampaignDetails from '@/views/dashboard-views/CampaignDetailsView.vue'

import SessionsView from '@/views/dashboard-views/SessionsView.vue'
import CharactersView from '@/views/dashboard-views/CharactersView.vue'
import EncountersView from '@/views/dashboard-views/EncountersView.vue'
import CreaturesView from '@/views/dashboard-views/CreaturesView.vue'
import RacesView from '@/views/dashboard-views/RacesView.vue'
import ClassesView from '@/views/dashboard-views/ClassesView.vue'
import SpellsView from '@/views/dashboard-views/SpellsView.vue'
import ItemsView from '@/views/dashboard-views/ItemsView.vue'
import MapsView from '@/views/dashboard-views/MapsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    children: [
      {
        path: 'campaigns',
        component: CampaignsView,
      },
      {
        path: ':campaignId',
        component: CampaignDetails
      },
      {
        path: 'sessions',
        component: SessionsView,
      },
      {
        path: 'characters',
        component: CharactersView,
      },
      {
        path: 'encounters',
        component: EncountersView,
      },
      {
        path: 'creatures',
        component: CreaturesView,
      },
      {
        path: 'races',
        component: RacesView,
      },
      {
        path: 'classes',
        component: ClassesView,
      },
      {
        path: 'spells',
        component: SpellsView,
      },
      {
        path: 'items',
        component: ItemsView,
      },
      {
        path: 'maps',
        component: MapsView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
