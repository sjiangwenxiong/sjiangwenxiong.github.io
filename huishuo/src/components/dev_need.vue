<template>
  <div class="dev-need">
    <form>
      <div>我有开发<span>需求</span></div>
      <p>请在下表格填写您的信息以及您的开发需求并提交，我们商务人员会在第一时间联系您</p>
      <input type="text" placeholder="您的姓名">
      <input type="text" placeholder="您的联系方式">
      <input type="text" placeholder="您的微信号（可不填）">
      <input type="text" placeholder="您的企业名称">
      <textarea placeholder="您的需求和建议"></textarea>
      <input type="submit" value="提交需求"> 
    </form>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dev-need{
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
}
.dev-need form>div{
  font-size: 30px;
  font-weight: bold;
  color: #333333;
}
.dev-need form>div>span{
  color: #108aed;
}
.dev-need form>p{
  font-size: 16px;
  color: #8a8a8a;
  margin-top: 20px;
  margin-bottom: 30px;
}
.dev-need input{
  padding-left: 20px;
  width: 570px;
  height: 45px;
  border: 1px solid #d2d2d2;
  margin-top: 25px;
}
.dev-need textarea{
  width: 570px;
  height: 100px;
  border: 1px solid #d2d2d2;
  margin-top: 25px;
  margin-left: -5px;
  padding: 10px 20px;
}
.dev-need input[type='submit']{
  margin-left: -5px;
  color: #fff;
  background: #108aed;
  font-size: 16px;
}
@media screen and (max-width: 767px){
  .dev-need p{
    margin: 0 !important;
  }
  .dev-need input{
    width: 81.5%;
    height: 10vw;
    margin-top: 5vw;
  }
  .dev-need textarea{
    width: 81.5%;
    height: 22vw;
    margin-top: 5vw;
    margin-left: 0;
  }
  .dev-need>form>div{
    font-size: 7vw;
  }
  .dev-need>form>p{
    font-size: 4.5vw;
  }
}
</style>
