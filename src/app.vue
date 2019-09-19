<template>
  <div>
        <div class="header" style="min-width: 1440px;">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">惠院问答</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse container" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" href="#">首页 <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">標簽</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">標簽</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">標簽</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">標簽</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">標簽</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="indexSeach">Search</button>
                    </form>
                </div>
                <ul class="justify-content-end mb-0">
<!--                    <button type="button" class="btn btn-light" @click="toLogin">登陆</button>-->
                    <router-link to="/login/1" class="btn btn-light">登陆</router-link>
                </ul>
                <ul class="justify-content-end mb-0 pl-0">
<!--                    <button type="button" class="btn btn-light" @click="toRegister">注册</button>-->
                    <router-link to="/login/0" class="btn btn-light">注册</router-link>
                </ul>
            </nav>
        </div>
        <div class="border-bottom "></div>
        <div class="main">
            <div class="mian-header nav list-inline w-100 mt-1">
                <ul class="nav nav-tabs container justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">分面</a>
                    </li>

                </ul>
            </div>
            <div class="main-content container d-flex justify-content-between mt-4">
                <div class="cl1">
                        <div class="questions-form container mt-2" v-for="i in list" :key="i"> 
                            <div class="question-item">
                                 <div class="questions-title">
                                    <h3><a href="javascript:;">你的微信支付分是多少？</a></h3>
                                    <div class="title-info">
                                        <span class="mr-2">199回答</span>
                                        <span>333收藏</span>
                                     </div>
                                  </div>
                                  <div class="answer">
                                      <div class="answer-haspic">
                                    <div class="answer-pic ">
                                        <a href="">
                                            <img src="" alt="">
                                        </a>
                                    </div>
                                    <div class="answer-info">
                                        <a href="">
                                            <img src="" alt="">
                                        </a>
                                        <span>优质科技领域创作者</span>
                                    </div>
                                    <div class="answer-content">
                                        <p>
                                            <a href="">微信最近再一次的更新了，而且这次的更新还带来一个非常有意思的功能，那就是微信支付分，现在在支付领域做得比较好的两家有支付宝和微信支付，而支付宝确实在支付这一块走的更远一些，比如说有..</a>
                                        </p>
                                    </div>
                                    <div class="answer-oper">
                                        <a href="javascript:;">
                                            <i></i>
                                            <span>100</span>
                                            <span>赞</span>
                                        </a>
                                        <a href="javascript:;">
                                            <i></i>
                                            <span>200</span>
                                            <span>踩</span>
                                        </a>
                                        <a href="javascript:;">
                                            <i></i>
                                            <span>300</span>
                                            <span>评论</span>
                                        </a>
                                        <a href="javascript:;">
                                            <i></i>
                                            <span>分享</span>
                                        </a>
                                    </div>
                                  </div>
                                  </div>
                            </div>
                       
                    </div>
                
                </div>
                <div class="cl2">
                    
                    </div>
                </div>

        </div>
        
        <div class="footer">
            <div class="container">
                <h1>这是底部</h1>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    data:function(){
        return {
            list:[1,2,3,4,5,6,7]
        }
    }

}
</script>

<style scoped lang='scss'>
    .main-content{
        width: 100%;
        .cl1{
            width: 65%;
            background-color: aquamarine;
            .question-item{
                padding-top: 20px;
                padding-right: 24px;
                padding-bottom: 22px;
                padding-left: 24px;
                background-color: #fff;
            }
            .title-info{
                color: #999;
            }
            .answer-haspic{
                padding-top: 16px;
                height: 124px;
                .answer-pic{
                    float: right;
                    width: 124px;
                    height: inherit;
                }
                .answer-info{
                    font-size: 13px;
                }
                .answer-content{
                    padding-right: 148px;
                    p{
                        margin-bottom: 0;
                    }
                }
                .answer-oper{
                    a{
                        margin-right: 36px;
                    }
                    span{
                        color: gray;
                        font-size:14px;
                    }
                }
            }
            
        }
        .cl2{
            width: 33%;
            height: 300px;
            background-color:black;
        }
    }
</style>