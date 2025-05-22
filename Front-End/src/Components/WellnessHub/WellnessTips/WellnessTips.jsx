import { useState } from "react";
import { ExternalLink, BookOpen, PlayCircle, Heart } from "lucide-react";
import ReactPlayer from "react-player/lazy";

export default function WellnessTips() {
  const articles = [
    {
      title: "Mental Health Awareness",
      description: "The Importance of Mental Health Awareness",
      image:
        "https://media.istockphoto.com/id/1319874358/vector/mental-health-medical-treatment.jpg?s=612x612&w=0&k=20&c=LoBwRcqLaTCPNq3d-pAaU8W9fsh8vpvAeGKMn7B9GTg=",
      url: "https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/",
    },
    {
      title: "Mental Health WHO",
      description: "World Health Organization about Mental Health",
      image:
        "https://thumbs.dreamstime.com/b/lightbox-motivation-words-self-care-positive-thinking-mental-health-emotional-wellness-top-view-185218521.jpg",
      url: "https://www.medicalnewstoday.com/articles/154543",
    },
    {
      title: "Mental Disorders",
      description: "World Health Organization about Mental-Health Disorders",
      image:
        "https://www.voicesofyouth.org/sites/voy/files/images/2020-06/gettyimages-1044233906.jpg",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders",
    },
    {
      title: "Why Mental Health is Important?",
      description: "Article of MedlinePlus how to improve mental health",
      image:
        "https://img.freepik.com/premium-photo/minimal-world-mental-health-day-poster-design_950002-110354.jpg",
      url: "https://medlineplus.gov/howtoimprovementalhealth.html",
    },
    {
      title: "5 Simple Mindfulness Exercises for Daily Stress Relief",
      description: "Discover easy mindfulness techniques to reduce stress and improve focus, perfect for incorporating into your daily routine",
      image:
      "https://positive.b-cdn.net/wp-content/uploads/2025/04/Mindfulness-exercises-600x300.jpg",
      url: "https://positivepsychology.com/mindfulness-exercises-techniques-activities/",
    },
    {
      title: "Journaling for Emotional Wellness",
      description: "Learn how journaling can help process emotions, reduce anxiety, and foster self-reflection, with tips to get started",
      image:
      "https://media.istockphoto.com/id/660648226/photo/girl-with-glasses-sitting-wooden-table-workplace.jpg?s=612x612&w=0&k=20&c=6UKv6AdCQzf-YJK7mIgua7D2iXcR9olxJP_QXwXXwJU=",
      url: "https://www.urmc.rochester.edu/encyclopedia/content?ContentTypeID=1&ContentID=4552#:~:text=It's%20simply%20writing%20down%20your,and%20improve%20your%20mental%20health.",
    },
    {
      title: "Understanding Anxiety: Causes, Symptoms, and Strategies",
      description: "An overview of anxiety disorders, their impact, and practical strategies to manage symptoms effectively",
      image:
        "https://img.freepik.com/free-vector/anxiety-concept-illustration_114360-8074.jpg?semt=ais_hybrid&w=740",
      url: "https://www.medicalnewstoday.com/articles/323454",
    },
    {
      title: "How to Start a Self-Care Routine You'll Follow",
      description: "A guide to building a personalized self-care routine that promotes mental and emotional balance in a busy world.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-IKi4yF_AanxMwnVkriu-oJonczopIc8Iw&s",
      url: "https://www.everydayhealth.com/self-care/start-a-self-care-routine/",
    },
  ];
  
  const relaxationVideos = [
    {
      url: "https://www.youtube.com/watch?v=z_JlCQOSI2A",
      title: "Guided Meditation for Relaxation",
    },
    {
      url: "https://www.youtube.com/watch?v=-izimqLkod8",
      title: "Deep Breathing Exercises",
    },
    {
      url: "https://www.youtube.com/watch?v=cyEdZ23Cp1E",
      title: "Progressive Muscle Relaxation",
    },
    {
      url: "https://youtu.be/COp7BR_Dvps?si=NDGDy-6dXQV0U06q",
      title: "Mindfulness Meditation",
    },
  ];

  const selfCareVideos = [
    {
      url: "https://www.youtube.com/watch?v=TflWjpVuA4w",
      title: "Self-Care Routine Ideas",
    },
    {
      url: "https://www.youtube.com/watch?v=bARpudRvNgA",
      title: "Healthy Habits for Mental Wellness",
    },
    {
      url: "https://youtu.be/b_ZFjw-eEGo?si=dh5kAqBk3ARb4IW2",
      title: "Stress Management Techniques",
    },
    {
      url: "https://youtu.be/Z9bIMtQ-a78?si=hKswkxmX2kti8-S0",
      title: "Journaling for Mental Health",
    },
  ];

  const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600 mb-4">
          Wellness Tips
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Explore articles, videos, and resources to support your mental
          well-being journey
        </p>
      </div>

      <div className="w-full mb-8">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setActiveTab("articles")}
            className={`flex items-center justify-center py-2 px-4 rounded ${
              activeTab === "articles"
                ? "bg-gradient-to-r from-purple-600/20 to-teal-600/20"
                : "bg-slate-100"
            } hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-teal-600/20 transition-colors`}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Articles
          </button>

          <button
            onClick={() => setActiveTab("relaxation")}
            className={`flex items-center justify-center py-2 px-4 rounded ${
              activeTab === "relaxation"
                ? "bg-gradient-to-r from-purple-600/20 to-teal-600/20"
                : "bg-slate-100"
            } hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-teal-600/20 transition-colors`}
          >
            <PlayCircle className="h-4 w-4 mr-2" />
            Relaxation
          </button>

          <button
            onClick={() => setActiveTab("selfcare")}
            className={`flex items-center justify-center py-2 px-4 rounded ${
              activeTab === "selfcare"
                ? "bg-gradient-to-r from-purple-600/20 to-teal-600/20"
                : "bg-slate-100"
            } hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-teal-600/20 transition-colors`}
          >
            <Heart className="h-4 w-4 mr-2" />
            Self-Care
          </button>
        </div>

        <div className="mt-8">
          {activeTab === "articles" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-fill transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <p className="text-slate-600 mt-1">{article.description}</p>
                  </div>
                  <div className="px-4 pb-4">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full text-purple-600 border border-purple-200 hover:bg-purple-50 hover:text-purple-700 py-2 rounded font-medium transition-colors">
                        Read Article
                        <ExternalLink className="inline ml-2 h-4 w-4" />
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "relaxation" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relaxationVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="aspect-video rounded-md overflow-hidden bg-slate-100">
                      <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="100%"
                        controls
                        light
                        config={{
                          youtube: {
                            playerVars: { origin: window.location.origin },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "selfcare" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selfCareVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="aspect-video rounded-md overflow-hidden bg-slate-100">
                      <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="100%"
                        controls
                        light
                        config={{
                          youtube: {
                            playerVars: { origin: window.location.origin },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
