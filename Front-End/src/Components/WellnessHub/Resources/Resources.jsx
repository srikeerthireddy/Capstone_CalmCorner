import React from "react";
import { ChevronDown, Brain, Heart, Moon, Coffee, Smile, BookOpen, Users, Clock, Leaf, MessageSquare, Sun, Sparkles, Lightbulb, Compass, Laugh, HeartHandshake, BatteryCharging, Trees } from 'lucide-react';

export default function Resources() {
  const faqs = [
    {
      question: "How do I manage stress in my daily life?",
      answer: [
        "Deep breathing exercises",
        "Mindfulness meditation",
        "Regular physical activity",
        "Maintaining a healthy diet",
        "Setting boundaries",
        "Seeking support from friends, family, or a mental health professional"
      ],
      icon: <Brain className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some tips for improving sleep quality?",
      answer: [
        "Establish a consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Make your sleep environment comfortable and conducive to sleep",
        "Limit exposure to screens before bed",
        "Avoid caffeine and large meals close to bedtime",
        "Manage stress through relaxation techniques"
      ],
      icon: <Moon className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some strategies to reduce stress at work?",
      answer: [
        "Prioritize tasks",
        "Set boundaries",
        "Take short breaks",
        "Practice time management",
        "Seek support from colleagues or supervisors"
      ],
      icon: <Coffee className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How can I incorporate mindfulness into my daily routine?",
      answer: [
        "Practice mindfulness meditation",
        "Focus on the present moment",
        "Engage in mindful activities such as walking or eating",
        "Bring awareness to your thoughts and emotions without judgment"
      ],
      icon: <Sparkles className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some effective relaxation techniques for stress relief?",
      answer: [
        "Deep breathing exercises",
        "Progressive muscle relaxation",
        "Guided imagery",
        "Aromatherapy",
        "Listening to calming music or nature sounds"
      ],
      icon: <Heart className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What role does nutrition play in stress management?",
      answer: [
        "Providing the body with essential nutrients",
        "Stabilizing blood sugar levels",
        "Supporting brain health",
        "Influencing mood-regulating neurotransmitters like serotonin and dopamine"
      ],
      icon: <Leaf className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How can I set realistic goals to reduce stress?",
      answer: [
        "Break larger tasks into smaller, manageable steps",
        "Prioritize tasks based on importance and urgency",
        "Set specific and achievable deadlines",
        "Celebrate progress along the way"
      ],
      icon: <Compass className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are the benefits of practicing gratitude for mental well-being?",
      answer: [
        "Promoting positive emotions",
        "Reducing stress and anxiety",
        "Enhancing resilience",
        "Strengthening relationships",
        "Fostering a sense of contentment and fulfillment"
      ],
      icon: <Smile className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some self-care practices for maintaining mental health?",
      answer: [
        "Engaging in activities you enjoy",
        "Setting aside time for relaxation and leisure",
        "Getting enough sleep",
        "Eating nutritious foods",
        "Staying physically active",
        "Seeking professional help when needed"
      ],
      icon: <HeartHandshake className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some effective coping strategies for dealing with unexpected challenges?",
      answer: [
        "Maintaining a positive outlook",
        "Staying flexible and adaptable",
        "Seeking solutions rather than dwelling on problems",
        "Practicing self-compassion",
        "Reaching out for support from others when needed"
      ],
      icon: <Lightbulb className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How does journaling help in managing stress and emotions?",
      answer: [
        "Providing a safe outlet for expressing thoughts and feelings",
        "Gaining insight into triggers and patterns",
        "Organizing thoughts",
        "Problem-solving",
        "Promoting self-reflection and self-awareness"
      ],
      icon: <BookOpen className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some mindfulness exercises I can practice throughout the day?",
      answer: [
        "Mindful breathing",
        "Body scan meditation",
        "Mindful walking",
        "Mindful eating",
        "Taking mindful pauses to check in with your thoughts, emotions, and sensations"
      ],
      icon: <Sun className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How can I create a supportive and stress-free work environment?",
      answer: [
        "Fostering open communication",
        "Encouraging collaboration and teamwork",
        "Recognizing and appreciating employee contributions",
        "Providing opportunities for professional development and growth",
        "Promoting work-life balance"
      ],
      icon: <Users className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are the benefits of laughter for reducing stress?",
      answer: [
        "Triggering the release of endorphins",
        "Relaxing the body and mind",
        "Boosting the immune system",
        "Improving mood",
        "Fostering social connections and bonding with others"
      ],
      icon: <Laugh className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How can I practice self-compassion during challenging times?",
      answer: [
        "Treating yourself with kindness and understanding",
        "Acknowledging your struggles without judgment",
        "Validating your emotions",
        "Offering yourself the same compassion and support you would to a friend in need"
      ],
      icon: <Heart className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some signs that indicate I need to take a break and recharge?",
      answer: [
        "Feeling overwhelmed, fatigued, irritable, or unable to concentrate",
        "Experiencing physical symptoms such as headaches or muscle tension",
        "Noticing changes in sleep patterns or appetite"
      ],
      icon: <BatteryCharging className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How does nature and spending time outdoors benefit mental well-being?",
      answer: [
        "Reducing stress levels",
        "Improving mood",
        "Promoting relaxation",
        "Increasing physical activity",
        "Fostering a sense of connection with the natural world",
        "Providing opportunities for mindfulness and reflection"
      ],
      icon: <Trees className="h-5 w-5 text-purple-600" />
    },
    {
      question: "What are some strategies for managing anxiety?",
      answer: [
        "Deep breathing exercises",
        "Mindfulness meditation",
        "Practicing relaxation techniques",
        "Challenging negative thoughts",
        "Staying physically active",
        "Seeking professional help",
        "Using medication if prescribed by a healthcare provider"
      ],
      icon: <Brain className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How does social media use impact mental health?",
      answer: [
        "Contributing to feelings of inadequacy, comparison, and FOMO (fear of missing out)",
        "Increasing stress levels",
        "Disrupting sleep patterns",
        "Fostering addiction-like behaviors"
      ],
      icon: <MessageSquare className="h-5 w-5 text-purple-600" />
    },
    {
      question: "How can I build resilience to better cope with life's challenges?",
      answer: [
        "Cultivating positive relationships",
        "Maintaining a hopeful outlook",
        "Practicing self-care",
        "Developing problem-solving skills",
        "Embracing change and adversity as opportunities for growth",
        "Seeking support from others when needed"
      ],
      icon: <Clock className="h-5 w-5 text-purple-600" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600 mb-4">
          Mental Health Resources
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Find answers to common questions about mental health, stress management, and self-care
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl shadow-sm">
        <div className="bg-gradient-to-r from-purple-600/10 to-teal-600/10 p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-slate-600 mt-1">Explore these resources to support your mental wellness journey</p>
        </div>
        <div className="p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200">
              <details className="group">
                <summary className="flex items-center justify-between py-4 cursor-pointer hover:text-purple-600">
                  <div className="flex items-center text-left">
                    <span className="mr-3">{faq.icon}</span>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-slate-600 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-10 pr-4 pb-4 text-slate-600">
                  <ul className="list-disc pl-5 space-y-1">
                    {faq.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}