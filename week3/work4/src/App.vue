<template>
  <div id="app">
    <table cellpading="0" cellspacing="0">
      <thead class="table-head">
        <tr>
          <th>选择</th>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>金额</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody class="table-body">
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <input
              type="checkbox"
              :value="index"
              v-model="checkData"
              @click="item.isSelect = !item.isSelect"
            />
          </td>
          <td class="showinfo">
            <img :src="item.img" />
            <span>{{ item.name }}</span>
          </td>
          <td>{{ item.unitPrice }}元</td>
          <td>
            <!-- 减少 -->
            <button
              :class="{ active: item.num != 1 }"
              :disabled="item.num == 1"
              @click="decrease(index)">-</button>
            <span style="margin: 0 5px">{{ item.num }}</span>
            <!-- 增加 -->
            <button class="active" @click="increase(index)">+</button>
          </td>
          <!-- 总价 -->
          <td>{{ item.num * item.unitPrice }}元</td>
          <td @click="removeItem(index)">删除</td>
        </tr>
      </tbody>
      <!-- 底部信息栏 -->
      <tfoot>
        <tr>
          <td>
            <label
              ><input
                type="checkbox"
                v-model="isSelectAll"
                @click="checkAll"
              />全选</label
            >
          </td>
          <td colspan="4">
            已选商品<span style="color: #f6b74a">{{ selectAmount }}</span
            >件,合计:<span style="color: #f6b74a">¥{{ totalMoney }}</span
            >元
          </td>
          <td><button class="settle">去结算</button></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [
        {
          img: require("..//assets/images/honor.jpg"),
          name: "华为 P20 4G手机 双卡双待",
          num: 1,
          unitPrice: 2399,
          isSelect: false,
        },
        {
          img: require("../assets/images/oppo.jpg"),
          name: "OPPO R15 智能手机 全网通",
          num: 2,
          unitPrice: 2699,
          isSelect: false,
        },
        {
          img: require("..//assets/images/vivo.jpg"),
          name: "vivo X27 8GB+256GB大内存",
          num: 1,
          unitPrice: 3588,
          isSelect: false,
        },
      ],
      //记录选中的项,
      checkData: [],
      //是否为全选
      isSelectAll: false,
    };
  },
  computed: {
    //计算选了几件
    selectAmount() {
      return this.checkData.length;
    },

    //计算总金额
    totalMoney() {
      let money = 0;
      this.checkData.forEach((item) => {
        let data = this.list[item];
        if (data.isSelect) {
          money += this.list[item].num * this.list[item].unitPrice;
        }
      });
      return money;
    },
  },
  watch: {
    checkData: {
      handler() {
        if (this.checkData.length === this.list.length && this.list.length!==0) {
          this.isSelectAll = true;
        } else {
          this.isSelectAll = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    //移除商品
    removeItem(removeIndex) {
      this.list.splice(removeIndex, 1);
      this.checkData = [];
      this.list.forEach((item,index)=>{
        if(item.isSelect){
          this.checkData.push(index);
        }
      })
    },
    //增加数量
    decrease(changIndex) {
      console.log("减少数量");
      //变更数量
      this.list.find((item, index) => {
        if (changIndex === index) {
          item.num--;
        }
      });
    },
    //减少数量
    increase(changIndex) {
      console.log("增加数量");
      //变更数量
      this.list.find((item, index) => {
        if (changIndex === index) {
          item.num++;
        }
      });
    },
    //是否全选
    checkAll() {
      //获取当前的选择状态
      let checkStatus = !this.isSelectAll;
      if (checkStatus) {
        //清空
        this.checkData = [];
        //全选
        this.list.forEach((item, index) => {
          item.isSelect = true;
          this.checkData.push(index);
        });
      } else {
        //全不选
        this.checkData = [];
        this.list.forEach((item, index) => {
          item.isSelect = false;
        });
      }
    },
  },
};
</script>

<style scoped>
table {
  border: 1px solid red;
  width: 800px;
  text-align: center;
}
.settle {
  background-color: red;
  padding: 10px;
}
button {
  border: none;
  color: white;
  background-color: #cccccc;
}
/* 可以活动时候的按钮样式 */
button.active {
  background-color: red;
  color: white;
}
.showinfo {
  position: relative;
  width: 400px;
}
.showinfo span {
  position: absolute;
  top: 50%;
  left: 140px;
}
tbody img {
  float: left;
  margin-left: 20px;
  width: 100px;
  /* height: 100px; */
}
tfoot {
  background-color: #eeeeee;
}
</style>
