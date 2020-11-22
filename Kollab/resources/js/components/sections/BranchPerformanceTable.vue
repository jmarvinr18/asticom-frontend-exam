<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; align: right;"
    >
      <el-table-column
        type="index"
        :index="indexMethod"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="Branch"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="sales"
        label="Total Sales (₱)"
        width="180"
      >
      </el-table-column>
      <el-table-column prop="address">
      </el-table-column>

    </el-table>
    <div class="pagination">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50"
        style="color: black;"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData: [{
        date: 'Makati',
        sales: '5,000.00',
        address: '20%'
      }, {
        date: 'BGC Taguig',
        sales: '4,000.00',
        address: '10.52%'
      }, {
        date: 'Mall of Asia, Pasay',
        sales: '3,000.00',
        address: '8.39%'
      }, {
        date: 'Quezon City',
        sales: '2,000.00',
        address: '5%'
      }, {
        date: 'Greenhills',
        sales: '1,000.00',
        address: '2%'
      }]
      // selectedRow: []
    }
  },
  mounted () {
    this.getData
  },
  methods: {
    async getData () {
      try {
        const response = await axios.get('/branch');
        this.tableData = response.data
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    indexMethod (index) {
      return index;
    }
  }
}
</script>