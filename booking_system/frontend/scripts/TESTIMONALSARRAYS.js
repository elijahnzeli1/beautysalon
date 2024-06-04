document.addEventListener("DOMContentLoaded", function() {
    const blogPostsContainer = document.querySelector(".blog-posts");
    const testimonialContainer = document.querySelector(".testimonial-container");

    if (!blogPostsContainer) {
      console.error("Blog posts container not found");
      return;
    }

    if (!testimonialContainer) {
      console.error("Testimonial container not found");
      return;
    }

    const blogPosts = [
      { title: "Top 10 Beauty Trends for the Summer Season",
      content: `
        <p>As the summer season approaches, it's time to refresh your beauty routine and embrace the latest trends. In this blog post, we highlight the top 10 beauty trends that will keep you looking fabulous all summer long:</p>
        <ol>
          <li><strong>Glowing Skin:</strong> Achieve a natural, sun-kissed glow with lightweight tinted moisturizers and luminous highlighters.</li>
          <li><strong>Bright Nail Colors:</strong> Say goodbye to neutrals and hello to vibrant nail shades like coral, turquoise, and neon pink.</li>
          <li><strong>Beachy Waves:</strong> Embrace effortless, tousled waves with salt sprays and texturizing products for a relaxed summer look.</li>
          <li><strong>Bold Lipsticks:</strong> Make a statement with bold lip colors in shades of red, orange, and fuchsia.</li>
          <li><strong>Dewy Makeup:</strong> Opt for dewy foundations and cream blushes to achieve a fresh, luminous complexion.</li>
          <li><strong>Statement Eyeliners:</strong> Experiment with graphic eyeliner looks, including winged eyeliner and colorful geometric shapes.</li>
          <li><strong>Hair Accessories:</strong> Elevate your hairstyles with trendy hair accessories like hair clips, headbands, and scrunchies.</li>
          <li><strong>Natural Beauty:</strong> Embrace natural beauty with minimal makeup and skincare products that focus on hydration and protection.</li>
          <li><strong>Body Shimmer:</strong> Enhance your summer glow with body shimmer oils and lotions for radiant, luminous skin.</li>
          <li><strong>DIY Spa Days:</strong> Create your own spa experience at home with DIY face masks, body scrubs, and relaxation techniques.</li>
        </ol>
        <p>Whether you're lounging by the pool or attending a summer soirée, these beauty trends will help you look and feel your best all season long!</p>
      ` },
      { title: "10 Essential Skincare Tips for Healthy, Glowing Skin",
      content: `
        <p>Healthy, glowing skin is the foundation of beauty. In this blog post, we share 10 essential skincare tips to help you achieve radiant, flawless skin:</p>
        <ol>
          <li><strong>Cleanse Twice Daily:</strong> Cleanse your face morning and night to remove dirt, oil, and impurities.</li>
          <li><strong>Moisturize Daily:</strong> Hydrate your skin with a moisturizer suited to your skin type to maintain softness and elasticity.</li>
          <li><strong>Protect with SPF:</strong> Apply sunscreen with SPF 30 or higher daily to protect your skin from harmful UV rays.</li>
          <li><strong>Exfoliate Weekly:</strong> Gently exfoliate your skin once or twice a week to remove dead skin cells and reveal a brighter complexion.</li>
          <li><strong>Eat a Healthy Diet:</strong> Incorporate fruits, vegetables, and omega-3 fatty acids into your diet for nourished, glowing skin.</li>
          <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to keep your skin hydrated and plump.</li>
          <li><strong>Get Enough Sleep:</strong> Aim for 7-8 hours of sleep each night to allow your skin to repair and regenerate.</li>
          <li><strong>Manage Stress:</strong> Practice stress-relief techniques like meditation and deep breathing to prevent stress-related skin issues.</li>
          <li><strong>Avoid Harsh Products:</strong> Choose skincare products free of harsh chemicals and fragrances to prevent irritation.</li>
          <li><strong>Visit a Professional:</strong> Schedule regular facials and skincare treatments with a licensed esthetician to maintain skin health.</li>
        </ol>
        <p>By following these skincare tips and adopting a consistent routine, you can achieve the radiant, healthy skin you've always wanted!</p>
      ` },
      {  title: "The Ultimate Guide to Summer Haircare: Tips for Healthy, Hydrated Hair",
      content: `
        <p>Summer can be harsh on your hair, but with the right care, you can keep your locks looking luscious and healthy. Here's your ultimate guide to summer haircare:</p>
        <ol>
          <li><strong>Protect from the Sun:</strong> Wear a hat or use UV-protective hair products to shield your hair from sun damage.</li>
          <li><strong>Hydrate Regularly:</strong> Deep condition your hair weekly to replenish moisture lost from sun exposure and swimming.</li>
          <li><strong>Avoid Heat Styling:</strong> Minimize heat styling and opt for air-drying or heat-free hairstyles to prevent further damage.</li>
          <li><strong>Trim Regularly:</strong> Schedule regular trims to get rid of split ends and keep your hair looking healthy and voluminous.</li>
          <li><strong>Use a Leave-In Conditioner:</strong> Apply a leave-in conditioner to damp hair to lock in moisture and protect against frizz.</li>
          <li><strong>Stay Hydrated:</strong> Drink plenty of water to hydrate your hair from the inside out and promote healthy growth.</li>
          <li><strong>Avoid Chlorine Damage:</strong> Rinse your hair with fresh water before and after swimming to minimize chlorine damage.</li>
          <li><strong>Switch to a Gentle Shampoo:</strong> Use a sulfate-free shampoo to cleanse your hair without stripping away natural oils.</li>
          <li><strong>Protect from Humidity:</strong> Use anti-frizz products to combat humidity and keep your hair smooth and manageable.</li>
          <li><strong>Invest in Silk Pillowcases:</strong> Sleep on silk pillowcases to prevent breakage and minimize friction on your hair.</li>
        </ol>
        <p>With these summer haircare tips, you can maintain healthy, hydrated hair all season long and enjoy beautiful locks wherever your summer adventures take you!</p>
      ` },
      { title: "The Benefits of Spa Treatments: Relax, Rejuvenate, and Renew",
      content: `
        <p>Spa treatments offer more than just pampering—they provide a range of health benefits for both the body and mind. Here are some of the many benefits of spa treatments:</p>
        <ul>
          <li><strong>Stress Relief:</strong> Spa treatments help reduce stress levels and promote relaxation, leading to improved mental well-being.</li>
          <li><strong>Improved Circulation:</strong> Massages and hydrotherapy treatments stimulate blood flow, which can improve circulation and promote healing.</li>
          <li><strong>Skin Rejuvenation:</strong> Facials and body scrubs exfoliate and hydrate the skin, leaving it smooth, soft, and glowing.</li>
          <li><strong>Muscle Relaxation:</strong> Massages relieve muscle tension and stiffness, promoting flexibility and mobility.</li>
          <li><strong>Toxin Removal:</strong> Heat treatments like saunas and steam baths help detoxify the body by eliminating toxins through sweat.</li>
          <li><strong>Improved Sleep:</strong> Spa treatments can help regulate sleep patterns and promote deeper, more restful sleep.</li>
          <li><strong>Mental Clarity:</strong> Relaxing spa environments and mindfulness practices can improve focus, concentration, and mental clarity.</li>
          <li><strong>Immune Boost:</strong> Stress reduction and relaxation can strengthen the immune system, making you less susceptible to illness.</li>
          <li><strong>Emotional Balance:</strong> Spa treatments provide a sense of well-being and balance, helping to alleviate symptoms of anxiety and depression.</li>
          <li><strong>Self-Care:</strong> Taking time for spa treatments is an act of self-care that promotes self-love and nurtures overall well-being.</li>
        </ul>
        <p>With so many benefits to enjoy, incorporating regular spa treatments into your wellness routine can help you look and feel your best from the inside out!</p>
      ` },
      { title: "10 DIY Beauty Hacks for Quick Fixes at Home",
      content: `
        <p>When you're short on time or can't make it to the salon, these DIY beauty hacks can help you look your best in minutes. Here are 10 quick fixes you can try at home:</p>
        <ol>
          <li><strong>Dry Shampoo:</strong> Refresh oily hair by applying dry shampoo to the roots and brushing it through.</li>
          <li><strong>Lip Scrub:</strong> Mix sugar and honey to create a DIY lip scrub for smooth, soft lips.</li>
          <li><strong>Eyebrow Gel:</strong> Use clear mascara or aloe vera gel to tame unruly eyebrows and keep them in place.</li>
          <li><strong>Tea Bags for Puffy Eyes:</strong> Place chilled tea bags on your eyes to reduce puffiness and soothe tired eyes.</li>
          <li><strong>Nail Polish Remover:</strong> Use nail polish remover to clean up smudged nail polish or remove stains from nails.</li>
          <li><strong>DIY Face Mask:</strong> Mix yogurt and honey for a hydrating face mask that brightens and nourishes the skin.</li>
          <li><strong>Volumizing Hair Powder:</strong> Sprinkle cornstarch or baby powder on the roots of your hair for instant volume.</li>
          <li><strong>Toothpaste for Pimples:</strong> Dab a small amount of toothpaste on pimples to dry them out and reduce redness.</li>
          <li><strong>DIY Hair Treatment:</strong> Coat damp hair with coconut oil or olive oil for a deep conditioning treatment that restores shine.</li>
          <li><strong>DIY Body Scrub:</strong> Mix coffee grounds with coconut oil for an exfoliating body scrub that smooths and softens skin.</li>
        </ol>
        <p>With these DIY beauty hacks, you can tackle common beauty concerns and achieve salon-worthy results from the comfort of your own home. Give them a try and discover the power of at-home beauty solutions!</p>
      ` },
      {
        title: "Top Hairstyles for Every Occasion",
        content: `
          <p>Choosing the perfect hairstyle can elevate your look and complement any occasion. Whether you're attending a wedding, a formal event, or simply going about your daily routine, here are some top hairstyles to inspire your next salon visit:</p>
          <h3>1. Sleek Low Bun</h3>
          <p>Perfect for formal events or professional settings, the sleek low bun exudes elegance and sophistication. Sweep your hair back into a sleek bun at the nape of your neck for a polished and timeless look.</p>
          <h3>2. Beachy Waves</h3>
          <p>Effortlessly chic and perfect for summer, beachy waves add texture and volume to your hair. Achieve this look by using a curling wand or braiding your hair overnight for natural-looking waves.</p>
          <h3>3. Braided Updo</h3>
          <p>Elegant and romantic, a braided updo is ideal for weddings or special occasions. Incorporate braids into a classic updo to add texture and detail, creating a stunning hairstyle that will turn heads.</p>
          <h3>4. Messy Ponytail</h3>
          <p>For a relaxed and casual vibe, opt for a messy ponytail. Tease your hair at the crown for volume, then gather it into a low ponytail and tousle the strands for a laid-back yet stylish look.</p>
          <h3>5. Classic French Twist</h3>
          <p>A timeless favorite, the classic French twist is perfect for formal events or evening affairs. Sweep your hair back into a twist, securing it with pins for an elegant updo that never goes out of style.</p>
          <p>Whether you're looking for a glamorous updo or a simple everyday hairstyle, these top hairstyles cater to every occasion and are sure to make you feel confident and beautiful!</p>
        `
  }
    ];

    const testimonials = [
      { name: "Mr Nthuku", testimonial: "GREAT WORK YOU HAVE DONE" },
      { name: "Ms Jane Wambua", testimonial: "Excellent service!" },
      { name: "Mr John Smith", testimonial: "Highly recommended!" },
    ];

    // Display blog posts
    blogPosts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("col-md-4", "mb-3");
      postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      blogPostsContainer.appendChild(postDiv);
    });

    // Display testimonials
    testimonials.forEach(testimonial => {
      const testimonialDiv = document.createElement("div");
      testimonialDiv.classList.add("col-md-4", "mb-3");
      testimonialDiv.innerHTML = `
        <div class="message client-message">
          <p>${testimonial.testimonial}</p>
          <footer class="blockquote-footer">${testimonial.name}</footer>
        </div>`;
      testimonialContainer.appendChild(testimonialDiv);
    });
  });