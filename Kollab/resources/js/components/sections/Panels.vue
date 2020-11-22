<template>
  <div class="row dashboard-panels">
    <div
      class="col-md panels"
      :class="{'panel-1': isPanel1 }"
      @click="selectedPanel(1)"
    >
      <div class="panel-upper">
        <div class="label">
          <h6>Sales</h6>
        </div>
        <div class="panel-data">
          <div class="percentage">
            <div class="percentage-1"><span>20% <i class="fas fa-arrow-up"></i></span></div>
          </div>
          <div class="panel-values">
            <label
              class="panel-label"
              for=""
            >Lifetime Sales</label>
            <div><span class="peso-sign">₱ </span><span> 175,000</span></div>
            <label
              class="panel-label"
              for=""
            >Revenue Sales</label>
            <div><span class="peso-sign">₱ </span><span> 170,000</span></div>
          </div>
        </div>
      </div>
      <div class="panel-lower">
        <div class="plower-left">Average Order Value</div>
        <div class="plower-right"><span class="peso-sign">₱ </span> <span> 1,000.00</span></div>
      </div>
    </div>
    <div
      class="col-sm  panels"
      :class="{'panel-2': isPanel2 }"
      @click="selectedPanel(2)"
    >
      <div class="panel-upper">
        <div class="label">
          <h6>Engagement</h6>
        </div>
        <div class="panel-data">
          <div class="percentage">
            <div class="percentage-2"><span>20% <i class="fas fa-arrow-down"></i></span></div>
          </div>
          <div class="panel-values">
            <label
              class="panel-label"
              for=""
            >Lifetime SMS Engagements</label>
            <span>285</span>
            <label
              class="panel-label"
              for=""
            >Daily Average</label>
            <span>57</span>
          </div>
        </div>
      </div>
      <div class="panel-lower">
        <span>20% decrease in 30 days</span>
      </div>
    </div>
    <div
      class="col-sm col-md panels"
      :class="{'panel-3': isPanel3 }"
      @click="selectedPanel(3)"
    >
      <div class="panel-upper">
        <div class="label">
          <h6>Acquisition</h6>
        </div>

        <div class="panel-data">
          <div class="percentage">
            <div class="percentage-3"><span>20% <i class="fas fa-arrow-up"></i></span></div>
          </div>
          <div class="panel-values">
            <label
              class="panel-label"
              for=""
            >Registered Users</label>
            <span>285</span>
            <label
              class="panel-label"
              for=""
            >Daily Average</label>
            <span>57</span>
          </div>
        </div>
      </div>
      <div class="panel-lower">
        <span>20% decrease in 30 days</span>
      </div>
    </div>
    <div
      class="col-sm col-md panels"
      :class="{'panel-4': isPanel4 }"
      @click="selectedPanel(4)"
    >
      <div class="panel-upper">
        <div class="label">
          <h6>Rewards Program</h6>
        </div>
        <div class="panel-data">
          <div class="percentage">
            <div class="percentage-4"><span>20% <i class="fas fa-arrow-up"></i></span></div>
          </div>
          <div class="panel-values">
            <label
              class="panel-label"
              for=""
            >Rewards Redeemed</label>
            <span>175,000</span>
            <label
              class="panel-label"
              for=""
            >Issued Rewards</label>
            <span>175,000</span>
          </div>
        </div>
      </div>
      <div class="panel-lower">
        <span>20% decrease in 30 days</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPanel1: false,
      isPanel2: false,
      isPanel3: false,
      isPanel4: false
    }
  },
  mounted () {
    this.getSales
    this.getEngagement
    this.getAcquisitionData
  },
  methods: {
    async getSales () {
      try {
        const response = await axios.get('/sales');
        this.tableData = response.data
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async getEngagement () {
      try {
        const response = await axios.get('/engagement');
        this.tableData = response.data
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async getAcquisitionData () {
      try {
        const response = await axios.get('/acquisition');
        this.tableData = response.data
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async getRewards () {
      try {
        const response = await axios.get('/rewards');
        this.tableData = response.data
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    selectedPanel (panel) {
      switch (panel) {
        case 1:
          this.isPanel1 = true
          this.isPanel2 = false
          this.isPanel3 = false
          this.isPanel4 = false
          break;
        case 2:
          this.isPanel1 = false
          this.isPanel2 = true
          this.isPanel3 = false
          this.isPanel4 = false
          break;

        case 3:
          this.isPanel1 = false
          this.isPanel2 = false
          this.isPanel3 = true
          this.isPanel4 = false
          break;

        case 4:
          this.isPanel1 = false
          this.isPanel2 = false
          this.isPanel3 = false
          this.isPanel4 = true
          break;
      }
    }
  }
}
</script>

<style>
.panel-1 {
  box-shadow: 1px 0px 5px 3px #7e9dff;
}
.panel-2 {
  box-shadow: 0.5px 1px 5px 1px #6ee2b7;
}
.panel-3 {
  box-shadow: 0.5px 1px 5px 1px #fec474;
}
.panel-4 {
  box-shadow: 0.5px 1px 5px 1px #d5a5ec;
}
</style>