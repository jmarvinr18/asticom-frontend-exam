<template>
  <div class="container main-layout">
    <NavBar />
    <div class="main-section">
      <Panels />

      <div class="container">
        <div class="selections">
          <select
            name=""
            id=""
          >
            <option value="">Last 7 days</option>
          </select>
          <select
            name=""
            id=""
          >
            <option value="">Last 7 days</option>
          </select>
        </div>

        <div class="chart-section">
          <div class="chart-title">
            <div class="title">
              <span>Sales Overview</span>
              <i class="fas fa-question-circle"></i>
            </div>
            <div class="select-branches">
              <select
                name=""
                id=""
              >
                <option value="">All Transactions</option>
              </select>
              <select
                name=""
                id=""
              >
                <option value="">All Branches</option>
              </select>
            </div>
          </div>
          <div class="main-chart">
            <Chart />
          </div>
        </div>

        <div class="tables-section">
          <div class="row tables">
            <div class="col-sm ">
              <div class="datatable">
                <div class="title">
                  <span>Branch Performance</span>
                  <i class="fas fa-question-circle"></i>
                </div>
                <div class="main-section-datatable">
                  <BranchPerformanceTable />
                </div>

              </div>

            </div>
            <div class="col-sm">
              <div class="datatable">
                <div class="title">
                  <span>Rewards Performance</span>
                  <i class="fas fa-question-circle"></i>
                </div>
                <div class="main-section-datatable">
                  <RewardsPerformanceTable />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../sections/NavBar'
import Panels from '../sections/Panels'
import Chart from '../sections/Chart'
import BranchPerformanceTable from '../sections/BranchPerformanceTable'
import RewardsPerformanceTable from '../sections/RewardsPerformanceTable'
export default {
  name: 'MainLayout',
  components: {
    NavBar,
    Panels,
    Chart,
    BranchPerformanceTable,
    RewardsPerformanceTable
  }
}
</script>