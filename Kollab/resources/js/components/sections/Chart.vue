<script>
import { Bar } from 'vue-chartjs'
export default {
  data: () => ({
    chartdata: {
      labels: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#7e9dff',
          data: [20, 15]
        },
        {
          label: 'Revenue',
          backgroundColor: '#00d5c0',
          data: [21, 49, 32, 18]
        },
        {
          label: 'Generated Points',
          backgroundColor: '#ca7ee4',
          data: [{ x: '2016-03-25', y: 11 }, { x: '2016-12-26', y: 19 }],

        }
      ],

    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        position: 'average'
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 0,
          bottom: 0
        }
      },
      legend: {
        display: true,
        fullWidth: false,
        align: 'start',
        labels: {
          boxWidth: 50,
          usePointStyle: false
        }
      }
    },
  }),
  components: { Bar },
  extends: Bar,
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>