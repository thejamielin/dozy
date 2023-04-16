import { Caption } from "react-native-paper";

const InfoScreen = () => {
  return <Caption>{sleepTips}</Caption>;
};

const sleepTips: String =
  "1. Stick to a sleep schedule." +
  "\n2. Exercise is great, but not too late in the night." +
  "\n3. Avoid caffeine and nicotine." +
  "\n4. Avoid alcoholic drinks before bed." +
  "\n5. Avoid large meals and beverages late at night." +
  "\n6. Avoid medicines that delay or disrupt your sleep (where possible)." +
  "\n7. Don’t nap after 3pm." +
  "\n8. Make sure to leave time to relax before bed." +
  "\n9. Take a hot bath before bed." +
  "\n10. Have a dark, cool (in temperature), gadget free bedroom." +
  "\n\n Source from Matthew Walker, a sleep researcher and professor at UCBerkeley";

export default InfoScreen;
