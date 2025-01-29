import React from 'react'

function Card({username, button}) {
    console.log("props", username)
    return (
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/29734498/pexels-photo-29734498/free-photo-of-green-parakeet-perched-in-brazilian-rainforest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width="384" height="512"/>
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption cla>
            <div>
              {username}
            </div>
            <div>
              Staff Engineer, Algolia
              {button}
            </div>
          </figcaption>
        </div>
      </figure>
    )
}

export default Card
