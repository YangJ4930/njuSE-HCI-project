import { Route, Routes } from 'react-router-dom';
import HomeView from '../view/home/homeView';
import SearchView from '../view/search/searchView';
import NewsView from '../view/news/newsView';
import { NewsContentMD } from '../view/news/component/newsContentMD';
import CommunityView from '../view/community/communityView';
import ExploreView from '../view/explore/exploreView';
import Explore_gameRepositoryView from '../view/explore/explore_gameRepositoryView';
import UserView from '../view/user/userView';
import PostComponent from '../view/community/component/postComponent';
import Communitydetail from '../component/communitydetail';
import GameDetailView from '../component/gameDetailView';
import { RegisterScreen } from '../view/user/RegisterScreen';
import { LoginScreen } from '../view/user/LoginScreen';
import React from 'react';
import UserSetting from '../view/user/userSetting';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomeView></HomeView>}></Route>
            <Route path='/search/*' element={<SearchView></SearchView>}></Route>
            <Route path='/news' element={<NewsView></NewsView>}></Route>
            <Route path={'/news/content/:id'} element={<NewsContentMD></NewsContentMD>}></Route>
            <Route path='/community' element={<CommunityView></CommunityView>}></Route>
            <Route path='/explore' element={<ExploreView></ExploreView>}></Route>
            <Route
                path='/explore/gameRepository'
                element={<Explore_gameRepositoryView></Explore_gameRepositoryView>}
            ></Route>
            <Route
                path='/component/postComponent'
                element={<PostComponent></PostComponent>}
            ></Route>
            <Route
                path='/component/Communitydetail/:communityId'
                element={<Communitydetail></Communitydetail>}
            ></Route>
            <Route path='/game/:gameId' element={<GameDetailView></GameDetailView>}></Route>
            <Route path='/user' element={<UserView></UserView>}></Route>
            <Route path={'/user/register'} element={<RegisterScreen></RegisterScreen>}></Route>
            <Route path={'/user/login'} element={<LoginScreen></LoginScreen>}></Route>
            <Route path={'/user/setting'} element={<UserSetting></UserSetting>}></Route>
        </Routes>
    );
}

export default Router;
