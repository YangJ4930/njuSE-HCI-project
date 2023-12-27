import { Route, Routes } from 'react-router-dom';
import HomeView from '../view/home/homeView';
import SearchView from '../view/search/searchView';
import NewsView from '../view/news/newsView';
import { NewsContentMD } from '../view/news/component/newsContentMD';
import CommunityView from '../view/community/communityView';
import ExploreView from '../view/explore/exploreView';
import ExploreGameRepositoryView from '../view/explore/exploreGameRepositoryView';
import UserView from '../view/user/userView';
import PostComponent from '../view/community/component/postComponent';
import GameDetailView from '../component/gameDetailView';
import { RegisterScreen } from '../view/user/RegisterScreen';
import { LoginScreen } from '../view/user/LoginScreen';
import React from 'react';
import UserSetting from '../view/user/userSetting';
import ExploreContentView from "../view/explore/exploreContentView";

function Router() {
    return (
        <Routes>
            <Route path='/' element={<ExploreView></ExploreView>}></Route>
            <Route path='/search/*' element={<SearchView></SearchView>}></Route>
            <Route path='/news' element={<NewsView></NewsView>}></Route>
            <Route path={'/news/content/:id'} element={<NewsContentMD></NewsContentMD>}></Route>
            <Route path='/community' element={<CommunityView></CommunityView>}></Route>
            <Route path='/explore' element={<ExploreView></ExploreView>}></Route>
            <Route
                path='/explore/gameRepository'
                element={<ExploreGameRepositoryView></ExploreGameRepositoryView>}
            ></Route>
            <Route
                path='/explore/gameDetail/:gameDetailId'
                element={<ExploreContentView></ExploreContentView>}
            ></Route>
            <Route
                path='/component/postComponent'
                element={<PostComponent></PostComponent>}
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
