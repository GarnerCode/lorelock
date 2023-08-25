<template>
    <nav>
        <div class="nav-upper">
            <div class="logo">
                LoreLock
            </div>
            <div class="nav-categories">
                <div class="nav-category" v-for="(item, index) of navData" :key="index">
                    <div class="nav-category-label">{{ item.category }}</div>
                    <ul class="nav-list">
                        <li class="nav-list-item" v-for="(link, index) of item.links" :key="index">
                            <router-link :class="{'active': link.active}" class="nav-list-link" :to="link.route">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav-lower">
            <div class="user-img"></div>
            <div class="user-info">
                <div class="user-info-name">TheLorelock</div>
                <div class="user-info-id">#199810</div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    @media screen and (min-width: 0px) {
        nav {
            background-color: var(--color-navy-2);
            height: calc(100vh - 40px);
            width: 50%;
            padding: 20px 0;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .logo {
                font-size: 1.75rem;
                text-align: center;
                margin-bottom: 20px;
            }
            .nav-categories {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .nav-category-label {
                font-weight: 500;
                color: var(--color-pink-1);
                font-size: 1.25rem;
                margin-bottom: 10px;
                padding-left: 20px;
            }
            .nav-list {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .nav-list-link {
                text-decoration: none;
                padding: 5px 0;
                display: block;
                padding-left: 40px;
                &.active {
                    background-color: var(--color-navy-4);
                    border-left: 5px solid var(--color-pink-1);
                }
                &:hover {
                    background-color: var(--color-navy-4);
                }
            }
        }
    }
    @media screen and (min-width: 1024px) {
        nav {
            position: static;
            margin: 0;
            width: calc(100% - 0px);
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { nav } from '@/constants/nav';

    export default defineComponent({
        name: 'Navbar',
        data: () => {
            return {
                navData: nav,
            }
        }
    })
</script>