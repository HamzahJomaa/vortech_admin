new Chartist.Bar(
    "#chart-with-area",
    { labels: [1, 2, 3, 4, 5, 6, 7, 8], series: [[5, 4, 7, 8, 5, 1, 5, 4],[5, 9, 3, 2, 5, 4, 5, 2]] },
    { low: 0, showArea: !0, plugins: [Chartist.plugins.tooltip()] }
);

new Chartist.Pie(
    "#animating-donut",
    { series: [63, 15, 22], labels: ["Series 1"] },
    {   donutWidth: 20, donut: !0, showLabel: !1, plugins: [Chartist.plugins.tooltip()] }
)
var chart = new Chartist.Pie(
    "#ct-donut",
    { series: [54, 28, 17], labels: [1, 2, 3] },
    { donut: !0, showLabel: !1, plugins: [Chartist.plugins.tooltip()] }
);
$(".peity-donut").each(function () {
    $(this).peity("donut", $(this).data());
}),
$(".peity-line").each(function () {
    $(this).peity("line", $(this).data());
});

$("#dashboard-table-02,#dashboard-table-04").DataTable({
    searching: false,
    lengthChange: false,
    fixedHeader: true,
    pageLength: 4,
    ordering: false,
    language: {
        paginate: {
            previous: '‹',
            next:     '›'
        },
        aria: {
            paginate: {
                previous: 'Previous',
                next:     'Next'
            }
        }
    }
})

$("#dashboard-table-05,#dashboard-table-06").DataTable({
    searching: false,
    lengthChange: false,
    fixedHeader: true,
    pageLength: 4,
    language: {
        paginate: {
            previous: '‹',
            next:     '›'
        },
        aria: {
            paginate: {
                previous: 'Previous',
                next:     'Next'
            }
        }
    }
})

