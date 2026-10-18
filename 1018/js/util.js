const doElementValueClean = (...eles) => {
    console.log('doElementValueClea() CALLED!!');

    for (let i = 0; i < eles.length; i++)
        eles[i].value = '';
}