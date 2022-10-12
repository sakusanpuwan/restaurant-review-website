package com.example.GoReview.components;


import com.example.GoReview.models.*;
import com.example.GoReview.repositories.RestaurantRepository;
import com.example.GoReview.repositories.ReviewRepository;
import com.example.GoReview.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("alice1", "Alice One", "alice1@mail.com");
        userRepository.save(user1);

        User user2 = new User("john2", "John Two", "john2@mail.com");
        userRepository.save(user2);

        Restaurant restaurant1 = new Restaurant("YO SUSHI","Glasgow","https://www.theglades.co.uk/wp-content/uploads/2020/02/yo_sushi.jpg");
        restaurant1.setCuisine(Cuisine.JAPANESE);
        restaurantRepository.save(restaurant1);

        Restaurant restaurant2 = new Restaurant("Dominos","London","https://www.dominos.co.uk/blog/wp-content/uploads/2020/06/Copy-of-Abundance.jpg");
        restaurant2.setCuisine(Cuisine.AMERICAN);
        restaurantRepository.save(restaurant2);

        Restaurant restaurant3 = new Restaurant("Bella Italia","Leeds","https://images.squaremeal.co.uk/cloud/restaurants/10845/images/bella-italia-islington-pizza-and-pasta-dishes_17072019085533.jpg?w=928&h=522&fit=crop");
        restaurant3.setCuisine(Cuisine.ITALIAN);
        restaurantRepository.save(restaurant3);

        Restaurant restaurant4 = new Restaurant("Zizzi","Manchester","https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_uk:cuisines:italian-2.jpg/v1/uk/restaurants/122962.jpg");
        restaurant4.setCuisine(Cuisine.ITALIAN);
        restaurantRepository.save(restaurant4);

        Restaurant restaurant5 = new Restaurant("Nandos","London","https://www.nandos.com/wp-content/uploads/2022/04/food-banner.jpg");
        restaurant5.setCuisine(Cuisine.SPANISH);
        restaurantRepository.save(restaurant5);

        Restaurant restaurant6 = new Restaurant("TGI Fridays","Birmingham","https://wembleypark.com/media/images/TGI_Fridays_Burgers_in_London_Des.2e16d0ba.fill-1200x630.jpg");
        restaurant6.setCuisine(Cuisine.AMERICAN);
        restaurantRepository.save(restaurant6);

        Restaurant restaurant7 = new Restaurant("Frankie & Benny's","Edinburgh","https://resizer.otstatic.com/v2/photos/wide-huge/1/25702863.jpg");
        restaurant7.setCuisine(Cuisine.ITALIAN);
        restaurantRepository.save(restaurant7);

        Restaurant restaurant8 = new Restaurant("Wagamama","Cardiff","https://i2-prod.hulldailymail.co.uk/incoming/article6023821.ece/ALTERNATES/s615/0_image0jpeg.jpg");
        restaurant8.setCuisine(Cuisine.JAPANESE);
        restaurantRepository.save(restaurant8);

        Restaurant restaurant9 = new Restaurant("Pizza Hut", "London", "https://www.greenqueen.com.hk/wp-content/uploads/2022/06/pizza-hut-green-queen.jpg");
        restaurant9.setCuisine(Cuisine.AMERICAN);
        restaurantRepository.save(restaurant9);

        Restaurant restaurant10 = new Restaurant("Whetherspoons", "Oxford", "https://metro.co.uk/wp-content/uploads/2021/07/SEC_86322035.jpg?quality=90&strip=all&zoom=1&resize=644%2C338");
        restaurant10.setCuisine(Cuisine.BRITISH);
        restaurantRepository.save(restaurant10);


        Review review1 = new Review(user1,restaurant1,"21/1/2022", Rating.EXCELLENT);
        Collections.addAll(review1.getDiet(), Diet.DAIRY_FREE, Diet.HALAL);
        review1.setPricing(Pricing.£££);
        review1.setOptionalMessage("I loved the salmon sushi in here!");
        reviewRepository.save(review1);

        Review review2 = new Review(user1,restaurant2,"1/10/2022", Rating.AVERAGE);
        Collections.addAll(review2.getDiet(), Diet.FISH_FREE, Diet.HALAL);
        Collections.addAll(review2.getAccessibility(), Accessibility.DOG_FRIENDLY,Accessibility.WHEELCHAIR_ACCESS);
        review2.setPricing(Pricing.££);
        review2.setOptionalMessage("good pizza, great deals for big groups.");
        reviewRepository.save(review2);

        Review review3 = new Review(user2,restaurant2,"5/12/2022", Rating.GOOD);
        Collections.addAll(review3.getDiet(), Diet.GLUTEN_FREE, Diet.FISH_FREE);
        review3.setPricing(Pricing.£);
        reviewRepository.save(review3);

        Review review4 = new Review(user1,restaurant3,"17/3/2022", Rating.COMPLETELY_DISSATISFIED);
        review4.setPricing(Pricing.££);
        Collections.addAll(review4.getAccessibility(), Accessibility.CHILD_FRIENDLY,Accessibility.WHEELCHAIR_ACCESS);
        Collections.addAll(review4.getDiet(), Diet.GLUTEN_FREE, Diet.VEGAN);
        review4.setOptionalMessage("not impressed, expected better service.");
        reviewRepository.save(review4);

        Review review5 = new Review(user2,restaurant1,"6/4/2022", Rating.GOOD);
        Collections.addAll(review5.getDiet(), Diet.FISH_FREE, Diet.VEGAN);
        review5.setPricing(Pricing.£££££);
        reviewRepository.save(review5);

        Review review6 = new Review(user2,restaurant3,"09/09/09",Rating.NOT_SATISFIED);
        review6.setPricing(Pricing.£££);
        Collections.addAll(review6.getAccessibility(), Accessibility.ACCESSIBLE_BATHROOMS,Accessibility.ACCESSIBLE_MENU);
        Collections.addAll(review6.getDiet(), Diet.DAIRY_FREE, Diet.NUT_FREE);
        review6.setOptionalMessage("could have more dairy free options on the menu");
        reviewRepository.save(review6);

        Review review7 = new Review(user2,restaurant4,"7/02/2022", Rating.GOOD);
        Collections.addAll(review7.getDiet(), Diet.GLUTEN_FREE, Diet.FISH_FREE);
        review7.setPricing(Pricing.£);
        reviewRepository.save(review7);

        Review review8 = new Review(user1,restaurant4,"15/11/2021", Rating.EXCELLENT);
        Collections.addAll(review8.getDiet(), Diet.GLUTEN_FREE, Diet.FISH_FREE);
        review8.setPricing(Pricing.£);
        reviewRepository.save(review8);

        Review review9 = new Review(user2,restaurant5,"5/12/2022", Rating.COMPLETELY_DISSATISFIED);
        Collections.addAll(review9.getDiet(), Diet.GLUTEN_FREE, Diet.DAIRY_FREE);
        review9.setPricing(Pricing.£);
        reviewRepository.save(review9);

        Review review10 = new Review(user2,restaurant6,"6/11/2021", Rating.GOOD);
        Collections.addAll(review10.getDiet(), Diet.HALAL);
        review10.setPricing(Pricing.£££);
        reviewRepository.save(review10);

        Review review11 = new Review(user2,restaurant6,"23/05/2022", Rating.AVERAGE);
        Collections.addAll(review11.getDiet(), Diet.HALAL);
        review11.setPricing(Pricing.£££);
        reviewRepository.save(review11);

    }
}
