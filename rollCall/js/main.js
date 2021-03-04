new Vue({
  el: '#app',
  data() {
    return {
      // 初始化字符串 模板：100张三,101李四,201王五,202赵六
      nameStr: '101黄海江,102傅勇飞,103毛雨薇,104董乃鑫,105何家勉,106何铭聪,107季庆涛,108金仁杰,109李建涵,110罗秋实,111许程涛,112杨鸿伟,113姚斌涛,114叶玉恒,115张博淳,116张康,117郑炟,118郑铮辉,119蔡际双,120黄淑雯,121柯慧杰,122宋偲琪,123宋浩,124徐书宁,125严锦辉,126姚潘龙,127赵忆轩,128陈佳敏,129李依霖,130娄惠莹,131陈敏,132赖春晖,133李尧,134彭龙涛,135宋杰,136徐兴才,137赵传振,138朱泳熹,139孙洁妮,140颜慧红,141张雲,142周青君,201舒畅,202何泽伟,203丁现杰,204龚镜仁,205何振宇,206胡晓宇,207黄灵杰,208刘灿,209罗一伟,210钱钧,211沈阳,212孙高,213吴利斌,214叶加乐,215章洁,216朱聪辉,217潘珍雅,218朱冯心语,219傅斌,220黄银祥,221乐炳男,222刘益聪,223叶照亮,224张坚强,225钟哲炜,226庄煜博,227蓝勤,228杨新千,229翟娅宁,230陈豪,231厉浩楠,232施杰,233钟夏艳,234程瑞潮,235胡加乐,236金龙,237梁明烈,238卢云龙,239童庆勋,240薛涨业,241羊森,242周伟涛',
      allNameArray: [],
      chooseClass1: [],
      chooseClass2: [],
      dialogRoll: false,
      isRepeat: null,
      chooseArrData: '',
      chooseData: {
        num: '',
        name: '',
        score: 0
      },
      isChange: false
    }
  },
  created() {
    this.allNameArray = this.nameStr.split(',')
  },
  mounted() {
    let self = this
    document.onkeyup = function(e) {
      let ev = document.all ? window.event : e
      if (ev.keyCode === 13 && self.isRepeat !== null && !self.dialogRoll) {
        self.getRoll()
      }
    }
  },
  methods: {
    addData() {
      this.chooseClass1.push({})
    },
    // 开始点名
    getRoll() {
      if (this.allNameArray.length) {
        const index = Math.floor(Math.random() * this.allNameArray.length)
        const chooseName = this.allNameArray[index].trim()
        if (this.chooseArrData && this.isRepeat) {
          this.allNameArray.push(this.chooseArrData)
        }
        this.chooseArrData = chooseName
        this.allNameArray.splice(index, 1)
        this.chooseData.num = chooseName.substring(0, 3)
        this.chooseData.name = chooseName.substring(3, chooseName.length)
        this.dialogRoll = true
        this.isChange = true
        this.$nextTick(() => {
          this.$refs.numberInput.focus()
        })
      }else {
        this.$message.warning('所有同学都已经点到过名字啦')
      }
    },
    // 确定分数
    sureScore() {
      if (this.isChange) {
        this.isChange = false
        const classNum = this.chooseData.num[0]
        if (classNum === '1') {
          this.chooseClass1.unshift({
            num: this.chooseData.num,
            name: this.chooseData.name,
            score: this.chooseData.score,
            key: this.chooseData.num + this.chooseClass1.length
          })
        }else if (classNum === '2') {
          this.chooseClass2.unshift({
            num: this.chooseData.num,
            name: this.chooseData.name,
            score: this.chooseData.score,
            key: this.chooseData.num + this.chooseClass2.length
          })
        }
        setTimeout(() => {  
          this.dialogRoll = false
        })
        this.chooseData.score = 0
      }
    },
    // 取消成绩操作
    closeScore() {
      this.$confirm('确认不保存这次的记录吗？再次点击确认后这次的记录将不会保存且无法找回', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dialogRoll = false
        this.chooseData.score = 0
        if (!isRepeat) {
          this.allNameArray.push(this.chooseData.num + this.chooseData.name)
        }
      }).catch(() => {});
    },
    // 导出excel
    getExcel(name) {
      const showLabel = ['序号', '姓名', '评分']
      let chooseClass1 = Object.assign([], this.chooseClass1)
      let chooseClass2 = Object.assign([], this.chooseClass2)
      chooseClass1.sort((a, b) => {
        return a.num - b.num
      })
      chooseClass2.sort((a, b) => {
        return a.num - b.num
      })
      const allData = [...chooseClass1, ...chooseClass2]
      if (name === 1) {
        if (chooseClass1.length === 0) {
          this.$message.warning('暂无数据')
        }else {
          this.JSONToExcelConvertor('一班评分', showLabel, chooseClass1)
        }
      }else if (name === 2) {
        if (chooseClass2.length === 0) {
          this.$message.warning('暂无数据')
        }else {
          this.JSONToExcelConvertor('二班评分', showLabel, chooseClass2)
        }
      }else if (name === 0) {
        if (allData.length === 0) {
          this.$message.warning('暂无数据')
        }else {
          this.JSONToExcelConvertor('全部评分', showLabel, allData)
        }
      }
    },
    /**
    * @param {String} FileName 文件名称
    * @param {Array} ShowLabel excel的表头
    * @param {Array} JSONData excel数据
    */
    JSONToExcelConvertor (FileName, ShowLabel, JSONData) {
      // 先转化json
      const arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData
      let excel = '<table>'
      // 设置表头
      let row = '<tr>'
      for (let i = 0, l = ShowLabel.length; i < l; i++) {
        row += '<td>' + ShowLabel[i] + '</td>'
      }
      // 换行
      excel += row + '</tr>'
      // 设置数据
      for (let i = 0; i < arrData.length; i++) {
        let row = '<tr>'
        for (let index in arrData[i]) {
          const value = arrData[i][index] === '.' ? '' : arrData[i][index]
          row += '<td>' + value + '</td>'
        }
        excel += row + '</tr>'
      }
      excel += '</table>'
      let excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>"
      excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">'
      excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel'
      excelFile += '; charset=UTF-8">'
      excelFile += '<head>'
      excelFile += '<!--[if gte mso 9]>'
      excelFile += '<xml>'
      excelFile += '<x:ExcelWorkbook>'
      excelFile += '<x:ExcelWorksheets>'
      excelFile += '<x:ExcelWorksheet>'
      excelFile += '<x:Name>'
      excelFile += '{worksheet}'
      excelFile += '</x:Name>'
      excelFile += '<x:WorksheetOptions>'
      excelFile += '<x:DisplayGridlines/>'
      excelFile += '</x:WorksheetOptions>'
      excelFile += '</x:ExcelWorksheet>'
      excelFile += '</x:ExcelWorksheets>'
      excelFile += '</x:ExcelWorkbook>'
      excelFile += '</xml>'
      excelFile += '<![endif]-->'
      excelFile += '</head>'
      excelFile += '<body>'
      excelFile += excel
      excelFile += '</body>'
      excelFile += '</html>'
      const uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile)
      const link = document.createElement('a')
      link.href = uri
      link.style = 'visibility:hidden'
      link.download = FileName + '.xls'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
})