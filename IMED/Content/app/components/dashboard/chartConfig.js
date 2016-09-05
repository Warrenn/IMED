const chartConfig = {
    options: {
        chart: {
            type: 'pie',
            height: 180,
            width: 180
        },
        useHtml: true,
        tooltip: {
            headerFormat: '',
            pointFormat: ' <span style="color:{point.color};font-size:12px;">\u25CF {point.name}: <b>{point.y}/{point.quoteCount}</b></span>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                shadow: false,
                cursor: 'pointer',
                center: ['50%', '45%']
            }
        },
        credits: {
            enabled: false
        },
        exporting: { enabled: false }
    },
    title: {
        useHTML: true,
        text: ''
    },
    series: {
        statuses: {
            name: 'Statuses',
            size: '100%',
            innerSize: '85%',
            dataLabels: {
                enabled: false
            }
        }
    },
    chartColors: {
        'notSubmitted': '#ea7125',
        'submitted': '#6dab43'
    }
};

export default chartConfig;