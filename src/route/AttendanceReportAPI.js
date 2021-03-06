const router=require('express').Router()
const attendanceReport = require('../controllers/AttendanceReportController')

router.post('/addAttendanceReport/:_id', attendanceReport.addAttendanceReport)
router.get('/findAllAttendanceReports', attendanceReport.findAllAttendanceReports)
router.get('/findAttendanceById', attendanceReport.findAttendanceById)
router.post('/editExistingTime/:_id', attendanceReport.editExistingTime)
router.post('/editEnteringTime', attendanceReport.editEnteringTime)
router.post('/editStartBreak/:_id', attendanceReport.editStartBreak)
router.post('/editEndBreak', attendanceReport.editEndBreak)
router.get('/getWageByMonth/:contractorWorkerID/:month', attendanceReport.getWageByMonth)
router.get('/getTwoMonthsSalaries/:contractorWorkerID/:month1/:month2', attendanceReport.getTwoMonthsSalaries)
router.get('/thisMonthSalary/:contractorWorkerID', attendanceReport.getThisMonthSalary)
router.get('/getTodaySalary/:contractorWorkerID', attendanceReport.getTodaySalary)
router.get('/getThisYearSalary/:contractorWorkerID', attendanceReport.getThisYearSalary)
router.get('/getRangeOfSalaryByShift/:contractorWorkerID', attendanceReport.getRangeOfSalaryByShift)
router.get('/displayEditAttendance/:_id', attendanceReport.displayEditAttendance)
router.post('/editAttendanceReport/:ID', attendanceReport.editAttendanceReport)



router.get('/addContractorForm', (req, res)=>{
    res.render('addContractorForm')
})
router.get('/compareTwoMonthSalaries',((req, res) =>
{
    res.render('ContractorWorkerViews/compareTwoMonthSalaries')

}))

router.get('/thisYearProfit',((req, res) =>
{
    res.render('ContractorWorkerViews/thisYearProfit')

}))
router.get('/rangeOfSalaryByShifts',((req, res) =>
{
    res.render('ContractorWorkerViews/rangeOfSalaryByShifts')

}))
router.get('/TodaySalary',((req, res) =>
{
    res.render('TodaySalary')

}))

router.get('/totalWageByMonth',((req, res) =>
{
    res.render('ContractorWorkerViews/totalWageByMonth')

}))
router.get('/thisMonthSalary',((req, res) =>
{
    res.render('ContractorWorkerViews/thisMonthSalary')

}))

module.exports=router