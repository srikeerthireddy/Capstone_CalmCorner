/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./Resources.css";

function Resources() {
  return (
    <>
      <div className="main-que-ans-con">
        <div className="question-con">
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How do I manage stress in my daily life?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Deep breathing exercises</li>
                  <li>Mindfulness meditation</li>
                  <li>Regular physical activity</li>
                  <li>Maintaining a healthy diet</li>
                  <li>Setting boundaries</li>
                  <li>
                    Seeking support from friends, family, or a mental health
                    professional
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some tips for improving sleep quality?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Establish a consistent sleep schedule</li>
                  <li>Create a relaxing bedtime routine</li>
                  <li>
                    Make your sleep environment comfortable and conducive to
                    sleep
                  </li>
                  <li>Limit exposure to screens before bed</li>
                  <li>Avoid caffeine and large meals close to bedtime</li>
                  <li>Manage stress through relaxation techniques</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some strategies to reduce stress at work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Prioritize tasks</li>
                  <li>Set boundaries</li>
                  <li>Take short breaks</li>
                  <li>Practice time management</li>
                  <li>Seek support from colleagues or supervisors</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How can I incorporate mindfulness into my daily routine?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Practice mindfulness meditation</li>
                  <li>Focus on the present moment</li>
                  <li>
                    Engage in mindful activities such as walking or eating
                  </li>
                  <li>
                    Bring awareness to your thoughts and emotions without
                    judgment
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some effective relaxation techniques for stress
                    relief?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Deep breathing exercises</li>
                  <li>Progressive muscle relaxation</li>
                  <li>Guided imagery</li>
                  <li>Aromatherapy</li>
                  <li>Listening to calming music or nature sounds</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What role does nutrition play in stress management?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Providing the body with essential nutrients</li>
                  <li>Stabilizing blood sugar levels</li>
                  <li>Supporting brain health</li>
                  <li>
                    Influencing mood-regulating neurotransmitters like serotonin
                    and dopamine
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How can I set realistic goals to reduce stress?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Break larger tasks into smaller, manageable steps</li>
                  <li>Prioritize tasks based on importance and urgency</li>
                  <li>Set specific and achievable deadlines</li>
                  <li>Celebrate progress along the way</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are the benefits of practicing gratitude for mental
                    well-being?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Promoting positive emotions</li>
                  <li>Reducing stress and anxiety</li>
                  <li>Enhancing resilience</li>
                  <li>Strengthening relationships</li>
                  <li>Fostering a sense of contentment and fulfillment</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some self-care practices for maintaining mental
                    health?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Engaging in activities you enjoy</li>
                  <li>Setting aside time for relaxation and leisure</li>
                  <li>Getting enough sleep</li>
                  <li>Eating nutritious foods</li>
                  <li>Staying physically active</li>
                  <li>Seeking professional help when needed</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some effective coping strategies for dealing with
                    unexpected challenges?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                Here are effective coping strategies for dealing with unexpected
                challenges presented in an unordered list:
                <ul>
                  <li>Maintaining a positive outlook</li>
                  <li>Staying flexible and adaptable</li>
                  <li>Seeking solutions rather than dwelling on problems</li>
                  <li>Practicing self-compassion</li>
                  <li>Reaching out for support from others when needed</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How does journaling help in managing stress and emotions?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>
                    Providing a safe outlet for expressing thoughts and feelings
                  </li>
                  <li>Gaining insight into triggers and patterns</li>
                  <li>Organizing thoughts</li>
                  <li>Problem-solving</li>
                  <li>Promoting self-reflection and self-awareness</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some mindfulness exercises I can practice
                    throughout the day?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Mindful breathing</li>
                  <li>Body scan meditation</li>
                  <li>Mindful walking</li>
                  <li>Mindful eating</li>
                  <li>
                    Taking mindful pauses to check in with your thoughts,
                    emotions, and sensations
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How can I create a supportive and stress-free work
                    environment?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Fostering open communication</li>
                  <li>Encouraging collaboration and teamwork</li>
                  <li>Recognizing and appreciating employee contributions</li>
                  <li>
                    Providing opportunities for professional development and
                    growth
                  </li>
                  <li>Promoting work-life balance</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are the benefits of laughter for reducing stress?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Triggering the release of endorphins</li>
                  <li>Relaxing the body and mind</li>
                  <li>Boosting the immune system</li>
                  <li>Improving mood</li>
                  <li>Fostering social connections and bonding with others</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How can I practice self-compassion during challenging times?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Treating yourself with kindness and understanding</li>
                  <li>Acknowledging your struggles without judgment</li>
                  <li>Validating your emotions</li>
                  <li>
                    Offering yourself the same compassion and support you would
                    to a friend in need
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some signs that indicate I need to take a break and
                    recharge?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>
                    Feeling overwhelmed, fatigued, irritable, or unable to
                    concentrate
                  </li>
                  <li>
                    Experiencing physical symptoms such as headaches or muscle
                    tension
                  </li>
                  <li>Noticing changes in sleep patterns or appetite</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How does nature and spending time outdoors benefit mental
                    well-being?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Reducing stress levels</li>
                  <li>Improving mood</li>
                  <li>Promoting relaxation</li>
                  <li>Increasing physical activity</li>
                  <li>
                    Fostering a sense of connection with the natural world
                  </li>
                  <li>
                    Providing opportunities for mindfulness and reflection
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    What are some strategies for managing anxiety?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Deep breathing exercises</li>
                  <li>Mindfulness meditation</li>
                  <li>Practicing relaxation techniques</li>
                  <li>Challenging negative thoughts</li>
                  <li>Staying physically active</li>
                  <li>Seeking professional help</li>
                  <li>
                    Using medication if prescribed by a healthcare provider
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How does social media use impact mental health?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>
                    Contributing to feelings of inadequacy, comparison, and FOMO
                    (fear of missing out)
                  </li>
                  <li>Increasing stress levels</li>
                  <li>Disrupting sleep patterns</li>
                  <li>Fostering addiction-like behaviors</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Accordion allowToggle className="Names">
            <AccordionItem className="NamesItem">
              <h2>
                <AccordionButton className="NamesButton">
                  <Box as="span" flex="1" textAlign="left">
                    How can I build resilience to better cope with life's
                    challenges?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="NamesPanel">
                <ul>
                  <li>Cultivating positive relationships</li>
                  <li>Maintaining a hopeful outlook</li>
                  <li>Practicing self-care</li>
                  <li>Developing problem-solving skills</li>
                  <li>
                    Embracing change and adversity as opportunities for growth
                  </li>
                  <li>Seeking support from others when needed</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Resources;
