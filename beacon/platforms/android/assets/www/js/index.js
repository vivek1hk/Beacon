function populate_data()
{
  data=getProviderByName("Eric");

  for(var i = 0;i<data.length;i++){

    console.log(data[i]);
  }
}
populate_data();
