import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import "../assets/css/main.css"
import { Comment } from '@ant-design/compatible';
import { Avatar, Card } from 'antd';

let content = ['a', 'b', 'c', 'd'];

function NewsContentView() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState('');
    let documentId = searchParams.get('document');
    return (
        <React.Fragment>
            <div className="container pt-4 pb-4">
                <div className="row justify-content-center">
                    <div className="col-lg-2 pr-4 mb-4 col-md-12">
                        <div className="sticky-top text-center">
                            <div className="text-muted">Share this</div>
                            <div className="share d-inline-block">
                                <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                                    <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                                    <a className="a2a_button_facebook"></a>
                                    <a className="a2a_button_twitter"></a>
                                </div>
                                <script
                                    async
                                    src="https://static.addtoany.com/menu/page.js"
                                ></script>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <article className="article-post">
                            <p>
                                Holy grail funding non-disclosure agreement advisor ramen
                                bootstrapping ecosystem. Beta crowdfunding iteration assets business
                                plan paradigm shift stealth mass market seed money rockstar niche
                                market marketing buzz market.
                            </p>
                            <p>
                                Burn rate release facebook termsheet equity technology. Interaction
                                design rockstar network effects handshake creative startup direct
                                mailing. Technology influencer direct mailing deployment return on
                                investment seed round.
                            </p>
                            <p>
                                Termsheet business model canvas user experience churn rate low
                                hanging fruit backing iteration buyer seed money. Virality release
                                launch party channels validation learning curve paradigm shift
                                hypotheses conversion. Stealth leverage freemium venture startup
                                business-to-business accelerator market.
                            </p>
                            <p>
                                Freemium non-disclosure agreement lean startup bootstrapping holy
                                grail ramen MVP iteration accelerator. Strategy market ramen
                                leverage paradigm shift seed round entrepreneur crowdfunding social
                                proof angel investor partner network virality.
                            </p>
                        </article>
                        <div className="border p-5 bg-lightblue">
                            <div className="row justify-content-between">
                                <div className="col-md-5 mb-2 mb-md-0">
                                    <h5 className="font-weight-bold secondfont">Become a member</h5>
                                    Get the latest news right in your inbox. We never spam!
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your e-mail address"
                                                value={inputValue}
                                            ></input>
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container pt-4 pb-4">
                <h5 class="font-weight-bold spanborder">
                    <span>Read next</span>
                </h5>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card border-0 mb-4 box-shadow h-xl-300">
                            {/* <div style={{background-image: url(./assets/img/demo/3.jpg); height: 150px; background-size: cover; background-repeat: no-repeat;}}
				</div> */}
                            <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
                                <h2 class="h4 font-weight-bold">
                                    <a class="text-dark" href="#">
                                        Brain Stimulation Relieves Depression Symptoms
                                    </a>
                                </h2>
                                <p class="card-text">
                                    Researchers have found an effective target in the brain for
                                    electrical stimulation to improve mood in people suffering from
                                    depression.
                                </p>
                                <div>
                                    <small class="d-block">
                                        <a class="text-muted" href="./author.html">
                                            Favid Rick
                                        </a>
                                    </small>
                                    <small class="text-muted">Dec 12 · 5 min read</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="flex-md-row mb-4 box-shadow h-xl-300">
                            <div class="mb-3 d-flex align-items-center">
                                <div class="pl-3">
                                    <h2 class="mb-2 h6 font-weight-bold">
                                        <a class="text-dark" href="./article.html">
                                            Nasa's IceSat space laser makes height maps of Earth
                                        </a>
                                    </h2>
                                    <div class="card-text text-muted small">
                                        Jake Bittle in LOVE/HATE
                                    </div>
                                    <small class="text-muted">Dec 12 · 5 min read</small>
                                </div>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <div class="pl-3">
                                    <h2 class="mb-2 h6 font-weight-bold">
                                        <a class="text-dark" href="./article.html">
                                            Underwater museum brings hope to Lake Titicaca
                                        </a>
                                    </h2>
                                    <div class="card-text text-muted small">
                                        Jake Bittle in LOVE/HATE
                                    </div>
                                    <small class="text-muted">Dec 12 · 5 min read</small>
                                </div>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <div class="pl-3">
                                    <h2 class="mb-2 h6 font-weight-bold">
                                        <a class="text-dark" href="./article.html">
                                            Sun-skimming probe starts calling home
                                        </a>
                                    </h2>
                                    <div class="card-text text-muted small">
                                        Jake Bittle in LOVE/HATE
                                    </div>
                                    <small class="text-muted">Dec 12 · 5 min read</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Card style={{}}>
                <Comment
                    author={<a>Han Solo</a>}
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <p>
                            We supply a series of design principles, practical patterns and high
                            quality design resources (Sketch and Axure), to help people create their
                            product prototypes beautifully and efficiently.
                        </p>
                    }
                />
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </React.Fragment>
    );
}

export default NewsContentView;
