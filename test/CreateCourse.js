describe('CourseCreate', async function () {


    it('LaunchUrl', async () => {
        await browser.url('https://sisclientweb-900191.campusnexus.dev/')
        await browser.pause(4000);
        await browser.maximizeWindow();


    });

    it('LoginFunction', async () => {


        await $("//input[@type='email']").setValue("$EMAILID")
        await $("//input[@type='submit']").click()
        await browser.pause(4000)
        await $("//input[@name='passwd']").setValue("$PASSWORD")
        await $("//input[@type='submit']").click()
        await browser.pause(4000)
        await $("//input[@type='submit']").click()
        await browser.pause(10000)
        await $("//button[@ng-if='!$ctrl.isRequired']").click()
        await browser.pause(4000)
        //await browser.saveScreenshot("./Screenshot0.png")
    })




        it('Homepage', async () => {


        await $("(//span[@class='fa fa-bars']").click()
        await browser.pause(5000)
        await $("(//a[@class='ng-binding'])[3]").click()
        await browser.pause(10000)
        //await browser.saveScreenshot("./Screenshot0.png")

    });

    it('CreateCourse', async () => {


        await $("//span[@class='k-in k-state-selected']").click()
        await browser.pause(10000)
        await $("(//a[@id='newButton']").click()
        await browser.pause(10000)
        await $("(//input[@class='form-control ng-pristine ng-valid ng-empty k-invalid ng-touched'])[1]").click()
        await browser.pause(5000)
        await $("(//input[@class='form-control ng-pristine ng-valid ng-empty k-invalid ng-touched'])[1]").setValue("$COURSENAME")
        await browser.pause(5000)
        await $("(//input[@class='form-control ng-pristine ng-valid ng-empty k-invalid ng-touched'])[2]").click()
        await browser.pause(5000)
        await $("(//input[@class='form-control ng-pristine ng-valid ng-empty k-invalid ng-touched'])[1]").setValue("$COURSECODE")
        await browser.pause(5000)
        await $("(//span[@class='k-icon k-i-arrow-60-down'])[2]").click()
        await browser.pause(5000)
        await $("//div[@class='search-display-flex']").click()
        await browser.pause(5000)
        await $("//input[@class='check-box styled-checkbox serach-control']").click()
        await $("//button[@class ='cmc-btn cmc-btn-primary ng-binding']").click()
        await browser.pause(5000)
        await $("//button[@class ='cmc-toolbar-button ng-binding']']").click()
        await browser.pause(5000)
        await browser.saveScreenshot("./Course.png")



    });






});