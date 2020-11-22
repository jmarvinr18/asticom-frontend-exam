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
        label="Badge"
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
        date: 'Reward 1',
        sales: '5,000.00',
        address: '20%'
      }, {
        date: 'Reward 2',
        sales: '4,000.00',
        address: '10.52%'
      }, {
        date: 'Reward 3',
        sales: '3,000.00',
        address: '8.39%'
      }, {
        date: 'Reward 4',
        sales: '2,000.00',
        address: '5%'
      }, {
        date: 'Reward 5',
        sales: '1,000.00',
        address: '5%'
      }]
      // selectedRow: []
    }
  },
  methods: {
    indexMethod (index) {
      return index;
    }
  }
}
</script>