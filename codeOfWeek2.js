/*1) JavaScript:
Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags.
 If multiple words tie for the same length, retrieve the word that occurs first.

Examples
getHashTags("How the Avocado Became the Fruit of the Global Trade")
--> ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
--> ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
--> ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
--> ["#visualizing", "#science"]*/

console.log(getHashTags("Visualizing Science"));


function getHashTags(headline)
{
  let headlineSplit = headline.split(" ");
  let longestWords = [];
  let hashtag = "#";
  let lw;

  if(headlineSplit.length <= 3)
  {
    longestWords = headlineSplit;
  }
  else
  {
      lw = headlineSplit[0];
    for(let j = 0; j < 3; j ++)
    {
        
     for(let i = 0; i<headlineSplit.length; i++)
     {
         if(headlineSplit[i].length > lw.length)
         {
             lw = headlineSplit[i];
         }
     }
     longestWords.push(lw);
     headlineSplit.splice(headlineSplit.indexOf(lw), 1);
     lw = headlineSplit[0];
  }
}

  for(let i = 0; i < longestWords.length;i++)
  {
      longestWords[i] = hashtag.concat(longestWords[i].toLowerCase());
  }

  return longestWords;
}