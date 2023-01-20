import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: any;

  stories = [
    {
      storyTitle: "Cat and Cow",
      story: `  Once upon a time, in a faraway meadow, there lived a beautiful cat named Whiskers and a happy cow named Bessie. Whiskers was always curious and loved to explore her surroundings, while Bessie loved nothing more than to graze on the lush grass all day.

One day, while Whiskers was out exploring, she came across a babbling brook that flowed through the meadow. As she was taking a drink, she spotted a shiny fish swimming in the water. Whiskers couldn't resist the temptation and started to stalk the fish, hoping to catch it for her lunch.

But the fish was too quick and managed to swim away, leaving Whiskers feeling disappointed. Just then, Bessie walked over to the brook and saw Whiskers looking sad.

"What's the matter, Whiskers?" Bessie asked.

"I was trying to catch a fish for lunch, but it got away," Whiskers replied with a sigh.

"Don't worry, my dear friend," Bessie said kindly. "There are plenty of other things to eat in the meadow. Let's go and find something together."

Whiskers was grateful for Bessie's offer and together, they set off to find some lunch. They searched through the tall grass and soon found a patch of juicy berries. They both enjoyed the sweet treats and were satisfied with their lunch.

From that day on, Whiskers and Bessie became the best of friends and spent their days exploring the meadow and finding new things to eat. They were always there for each other and were grateful to have such a strong friendship.


      `

    },
    {
      storyTitle: "Ginger the Brave: The Story of a Loyal Dog and a Lucky Boy",
      story: `There once was a little boy named Jack who loved nothing more than playing with his beloved dog, Ginger. Ginger was a energetic golden retriever with a wagging tail and a big smile on her face. She was always ready to play with Jack, no matter what time of day it was.

      One summer afternoon, Jack and Ginger decided to go on an adventure in the woods behind their house. They packed a bag with some snacks and set off into the lush forest. As they walked, they marveled at the tall trees and the colorful wildflowers that lined the path.
      
      After a while, they came across a bubbling stream. Ginger ran over to the water and started to drink from it, while Jack sat down on a nearby rock to rest. Suddenly, Jack heard a loud noise behind him and turned around to see a large bear lumbering towards him.
      
      Jack's heart started to race as the bear got closer and closer. Just as he thought he was doomed, Ginger jumped up and barked fiercely at the bear, causing it to run off into the woods.
      
      Jack was so grateful to Ginger for saving him and hugged her tightly. "Thank you, Ginger! You're the best dog a boy could ask for," he said, smiling widely.
      
      From then on, Jack and Ginger became even closer and went on many more adventures together, always sticking by each other's side. They learned that no matter what challenges they faced, they could always rely on the strength of their friendship to get through anything. The end`

    },
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.folder 
    const storyName = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log("storyName::::", storyName);
    const story = this.stories.find(s => s.storyTitle == storyName);
    console.log("story::::", story);

    this.folder = story
  }

}
