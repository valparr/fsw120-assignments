import React from "react"
import boxCard from "./boxCard"

function App() {
    return (
        <div className="card-details">
            <boxCard
                title="Step 1"
                subtitle="Eliminate Clutter"
                description="Ever wonder why those people on Hoarders look so miserable? Climbing out from underneath piles of stuff can also mean emotional freedom from items that could be mentally weighing you down."
                bgcolor="#001F78"
            />

            <boxCard
                title="Step 2"
                subtitle="Just Add Water"
                description="You've heard it before, but it's worth repeating. It's important to drink eight to 10 glasses of water every day to keep our bodies functioning properly."
                bgcolor="#00B5DB"
            />

            <boxCard
                title="Step 3"
                subtitle="Create a Daily Ritual"
                description="If you set aside just 10 minutes a day for yourself, Alexandre says, it will do wonders in eliminating daily stress and anxiety."
                bgcolor="#F03D14"
            />

            <boxCard
                title="Step 4"
                subtitle="Just Move It!"
                description="Exercise not only makes you more physically fit, it also boosts your mood, increases your energy, and it can even improve your sex life."
                bgcolor="#FA6E0A"
            />

            <boxCard
                title="Step 5"
                subtitle="Improve Your Penmanship"
                description="Writing in a journal daily helps you clarify your thoughts and feelings, reduces stress, and helps you resolve problems more effectively,"
                bgcolor="#FFBF45"
            />

            <boxCard
                title="Step 6"
                subtitle="All You Need is Love"
                description="Make time in your schedule to see the people you love. Play with a child, hug your friends, tell someone you love them, and smile at someone you don't know. These small gestures can make a big difference."
                bgcolor="#001F78"
            />

            <boxCard
                title="Step 7"
                subtitle="Eat Your Veggies"
                description="Vegetables are an abundance of necessary vitamins and minerals that help keep us healthy and energized. So stop making excuses and eat some everyday. Doctors recommend at least five servings a day."
                bgcolor="#00B5DB"
            />

            <boxCard
                title="Step 8"
                subtitle="Sleep It Off"
                description="Sleep improves stress, reduces inflammation, and allows cells to re-charge and repair damage. It also keeps us functioning at our optimum levels both mentally and physically."
                bgcolor="#F03D14"
            />

            <boxCard
                title="Step 9"
                subtitle="Supplement Your Life"
                description="Take an omega-3 supplement. These amazing fats found in salmon, flaxseeds, and walnuts purportedly give you glowing skin, fight stress, and reduce inflammation in the body."
                bgcolor="#FA6E0A"
            />

            <boxCard
                title="Step 10"
                subtitle="Forget the Complaint Department"
                description="Stop complaining about never getting what you want, and instead, create what you want."
                bgcolor="#FFBF45"
            />
            
        </div>
    )
}

export default App