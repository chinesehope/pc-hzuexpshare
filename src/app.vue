<template>
  <div style="min-width:1500px">
    <div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">惠院问答</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse container" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active mr-5">
              <a class="nav-link" href="#">
                首页
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              @click.prevent="indexSeach"
            >Search</button>
          </form>
        </div>
        <ul class="justify-content-end mb-0">
          <!--                    <button type="button" class="btn btn-light" @click="toLogin">登陆</button>-->
          <router-link to="/login/1" class="btn btn-light">登录</router-link>
        </ul>
        <ul class="justify-content-end mb-0 pl-0">
          <!--                    <button type="button" class="btn btn-light" @click="toRegister">注册</button>-->
          <router-link to="/login/0" class="btn btn-light">注册</router-link>
        </ul>
      </nav>
    </div>
    <div class="border-bottom"></div>
    <div class="main">
      <div class="mian-header nav list-inline w-100 mt-1">
        <ul class="nav nav-tabs container justify-content-start">
          <li class="nav-item">
            <a class="nav-link active" href="#">最新的</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">热门的</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">未回答</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">所在学院</a>
          </li>
          <el-button type="primary" @click="putQuestion">提问</el-button>
          <el-button type="primary" @click="putExperience">发布经验</el-button>
        </ul>
      </div>
      <div class="main-content container d-flex justify-content-between mt-4">
        <div class="cl1">
          <div class="questions-form container mt-2" v-for="(item,i) in showlist" :key="i">
            <div class="question-item">
              <div class="questions-title">
                <h3>
                  <a href="javascript:;">{{item.title}}</a>
                </h3>
                <div class="title-info">
                  <span class="mr-2">{{item.answerCount}}回答</span>
                  <span>{{item.starCount}}收藏</span>
                </div>
              </div>
              <div class="answer">
                <div class="answer-haspic">
                  <div class="answer-pic">
                    <a href>
                      <img src alt />
                    </a>
                  </div>
                  <div class="answer-info">
                    <a href>
                      <img src alt />
                    </a>
                    <span>{{item.userName}}</span>
                  </div>
                  <div class="answer-content">
                    <p>
                      <a href>{{item.comment}}..</a>
                    </p>
                  </div>
                  <div class="answer-oper">
                    <a href="javascript:;">
                      <i></i>
                      <span>{{item.agreeCount}}</span>
                      <span>赞</span>
                    </a>
                    <a href="javascript:;">
                      <i></i>
                      <span>{{item.disagreeCount}}</span>
                      <span>踩</span>
                    </a>
                    <a href="javascript:;">
                      <i></i>
                      <span>{{item.discussCount}}</span>
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
        <div class="cl2"></div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <h1>这是底部</h1>
      </div>
    </div>
    <el-dialog title="提问" :visible.sync="questionDialogFormVisible" width="40%">
      <el-form :model="questionForm">
        <el-form-item label="添加标题(最多40字)" label-position="top">
          <el-input autocomplete="off" v-model="questionForm.title"></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item>
          <el-input
            type="textarea"
            rows="4"
            placeholder="添加问题背景描述(选填)"
            v-model="questionForm.describe"
          ></el-input>
        </el-form-item>
        <el-form-item class="container d-flex justify-content-center">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div
              class="el-upload__tip d-flex justify-content-center"
              slot="tip"
            >只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="questionDialogSubmit">提 交</el-button>
      </div>
    </el-dialog>

    <el-dialog title="发布经验" :visible.sync="experienceDialogFormVisible" width="40%">
      <el-form :model="experienceForm"></el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="experienceDialogFormVisible = false">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import User from "./mock/mock.js";
export default {
  data: function() {
    return {
      showlist: [1, 2, 3, 4, 5, 6, 7],
      questionDialogFormVisible: false,
      experienceDialogFormVisible: false,
      questionForm: {},
      experienceForm: {},
      user: User
    };
  },
  created() {
    this.$ajax({
      url: "aaa/bbb.php",
      methods: "GET"
    }).then(r => (this.showlist = r.data.list));
  },
  methods: {
    // 提问
    putQuestion() {
      console.log("tiwen");
      this.questionDialogFormVisible = true;
    },
    // 发布经验
    putExperience() {
      console.log("fabujingyan");
      this.experienceDialogFormVisible = true;
    },
    // 快速搜索
    indexSeach() {
      console.log("sousuo");
    },
    // 提交
    questionDialogSubmit() {
      console.log(this.questionForm);
      this.questionDialogFormVisible = false;
    }
  }
};
</script>

<style scoped lang='scss'>
.main-content {
  width: 100%;
  .cl1 {
    width: 65%;
    background-color: aquamarine;
    .question-item {
      padding-top: 20px;
      padding-right: 24px;
      padding-bottom: 22px;
      padding-left: 24px;
      background-color: #fff;
    }
    .title-info {
      color: #999;
    }
    .answer-haspic {
      padding-top: 16px;
      height: 124px;
      .answer-pic {
        float: right;
        width: 124px;
        height: inherit;
      }
      .answer-info {
        font-size: 13px;
      }
      .answer-content {
        padding-right: 148px;
        p {
          margin-bottom: 0;
          a {
          }
        }
      }
      .answer-oper {
        a {
          margin-right: 36px;
        }
        span {
          color: gray;
          font-size: 14px;
        }
      }
    }
  }
  .cl2 {
    width: 33%;
    height: 300px;
    background-color: black;
  }
  .el-upload {
    display: block;
  }
}
</style>