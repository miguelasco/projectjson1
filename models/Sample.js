var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'death_counts'
});
mongoose.model('Sample', SampleSchema);

/*
 {
    "Year":2010,
    "Ethnicity":"NON-HISPANIC BLACK",
    "Sex":"MALE",
    "Cause_of_Death":"INFLUENZA AND PNEUMONIA",
    "Count":201,
    "Percent":3
  },
  
  Year: Number,
  Ethnicity: String,
  Sex: String,
  Cause_of_Death: String,
  Count: Number,
  Percent: Number,
  
*/
