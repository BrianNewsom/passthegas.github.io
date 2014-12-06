// Author: Brian Newsom
// Date : Dec 4, 2014
// dalekTests.js - Tests run by dalek to automatically test js code.

module.exports = {
    'Page title is correct': function (test) {
          test
              .open('http://passthegas.github.io')
                  .assert.title().is('PassTheGas | Split gas costs', 'It has title')
                      .done();
    },
    'Test Units Button': function (test) {
        test
            .open('http://passthegas.github.io')
                .assert.text('#distance_btn','mi','It displays miles correctly!')
                .click('#unitbtn')
                .assert.text('#distance_btn','km','It changes on button click')
                .done();
    },
    'Test Distance Calculation': function(test){
        test
            .open('http://passthegas.github.io')
                .setValue('#start',"Fort Collins")
                .wait(1000)
                .setValue('#end','Boulder')
                .wait(1000)
                .assert.val('#distance', '55','Calculates correct navigation distance!')
                .done();
    },
    'Test Cost Calculation': function(test){
        test
            .open('http://passthegas.github.io')
                .setValue('#distance','12')
                .setValue('#mileage','28')
                .setValue('#gasPrice','2.36')
                .setValue('#passengers','2')
                .wait(1000)
                .assert.text('#returnVal','This trip costs $0.51 per person.', 'Calculates total cost correctly!')
                .done();
    },
    'Test Extra Pages': function(test){
        test
            .open('http://passthegas.github.io/html/howto')
                .assert.url('http://passthegas.github.io/html/howto', 'URL is as expected')
            .open('http://passthegas.github.io/html/contact')
                .assert.text('h3','Developers','Developers page behaves as expected')
            .open('http://passthegas.github.io/html/legal')
                .assert.text('h2','Legal','Legal page is as expected')
            .done();
    }




};
