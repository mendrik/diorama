# diorama

An image layout algorithm that distributes a set of images into a fixed sized rectangle. Please note that the algorithm is heuristic and works best, when there is a sufficient amount of images to find a good solution, usually 5 or more images. 

---
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

# Background

A few years ago I was tasked to write an image layout algorithm that would create a gallery from a set of images in a fixed sized rectangle. I have initially looked into this problem by checking out existing solutions, the most satisfying ones were based on partitioning a single row of images and adjusting the heights to meet the aspect ratios. However none of them seemed to deal with a fixed height as well. Other solutions like stacking boxes on a grid left unfilled gaps or had to crop the images too much to look nice.

So after a lot of thinking I finally had an idea which I will elaborate a bit. At the core we can always combine two images to a new rectangle. Given the aspect ratios of two images a1 and a2, we can combine them either horizontally or vertically and the new aspect ratios can be easily calculated with a1 + a2 or (a1 * a2) / (a1 + a2) respectively.

Now we can create a full binary and balanced tree for a set of images (the lowest leaves), however since the image count needs to be a power of two I need to fill up the set with dummies to meet the right amount of leaves. The dummies behave like single lines and are not visible in the final rendering. Once this is done I go ahead and shuffle the leaves and then climb the tree upwards with each node also randomly choosing which aspect ratio formula to pick (vertical vs horizontal combination). When we reach the root node its aspect ratio can be compared to the aspect ratio of the target canvas. The closer the match, the less cropping of images is required.

Another problem was that some solutions would scale up single images too much and leave the rest too small to look nice. So evaluating the solutions includes also calculating the real sizes and making sure we discard solutions with too much variations in image sizes, even if it means the cropping might increase.
