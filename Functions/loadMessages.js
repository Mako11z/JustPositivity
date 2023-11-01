
import { createPosEntry, deleteAllEntries } from "../RealmFiles/realmFunctions";


const loadPosMessages = () => {
    deleteAllEntries();
    createPosEntry("You are enough");
    createPosEntry("Its okay to mess up");
    createPosEntry("You are stronger than you think, and you can overcome any obstacle in your path.");
    createPosEntry("Embrace your uniqueness; you are a one-of-a-kind masterpiece.");
    createPosEntry("Every day is a new opportunity to make a positive change in your life.");
    createPosEntry("Don't be afraid to make mistakes, for they are the stepping stones to success.");
    createPosEntry("Your potential is limitless, and your dreams are within reach.");
    createPosEntry("Happiness is a choice you can make every single day.");
    createPosEntry("Kindness costs nothing but can mean everything to someone in need.");
    createPosEntry("Your past does not define your future; you have the power to shape your destiny.");
    createPosEntry("The journey is just as important as the destination; savor every moment.");
    createPosEntry("Believe in yourself, and others will believe in you too.");
    createPosEntry("Cherish the simple joys of life; they are often the most precious.");
    createPosEntry("Success is not measured by the destination but by the progress you make.");
    createPosEntry("You have the strength to turn your dreams into reality; start today.");
    createPosEntry("Every setback is a setup for a comeback; keep moving forward.");
    createPosEntry("The world is full of beauty; take time to appreciate the little things.");
    createPosEntry("You have the power to create your own sunshine on the cloudiest days.");
    createPosEntry("You are worthy of love and respect, just as you are.");
    createPosEntry("Your presence in this world makes it a better place; don't underestimate your impact.");
    createPosEntry("Gratitude can transform your life; focus on what you have, not what you lack.");
    createPosEntry("The future is bright, and you have the potential to make it even brighter.");
};

export default loadPosMessages;