// Components.d.ts — the complete catalog of the 75 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AdmitTag) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Admit Tag" (node 1:692)
export interface AdmitTagProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "admitted" | "not admitted" | "running" | "complete";
  /** Text content; defaults to "ভর্তি হয়েছো". */
  text1?: string;
}

// figma layer: "All activity stages" (node 1:118)
export interface AllActivityStagesProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "1" | "2" | "3" | "4" | "6" | "completed" | "no activity" | "5";
}

// figma layer: "All Topic Section" (node 1:5313)
export interface AllTopicSectionProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "সব বিষয়". */
  text1?: string;
}

// figma layer: "Archived Courses" (node 1:5767)
export interface ArchivedCoursesProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "তোমার লার্নিং লাইব্রেরি". */
  text1?: string;
  /** Text content; defaults to "তোমার আগের সব কোর্স আর লেসন থাকছে এখানেই।". */
  text2?: string;
  /** Text content; defaults to "৫টি কোর্স আছে". */
  text3?: string;
}

// figma layer: "arrow_forward_24px" (node 1:4153)
export interface ArrowForward24pxProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "arrow_forward_ios_24px" (node 1:3857)
export interface ArrowForwardIos24pxProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Avatars" (node 1:2840)
export interface AvatarsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "real picture (f)" | "no image" | "boy 1" | "boy 2" | "boy 3" | "boy 4" | "girl 1" | "girl 2" | "girl 3" | "girl 4" | "girl 5" | "girl 6" | "real picture (m)";
}

// figma layer: "Biology" (node 1:5910)
export interface BiologyProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Bottom navigation" (node 1:4046)
export interface BottomNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Building Blocks/status-bar" (node 1:2618)
export interface BuildingBlocksStatusBarProps {
  className?: string;
  style?: React.CSSProperties;
  cameraCutout?: boolean;
  /** Text content; defaults to "9:30". */
  text1?: string;
}

// figma layer: "Button" (node 1:823)
export interface Button2Props {
  className?: string;
  style?: React.CSSProperties;
  color?: "blue" | "disable" | "pink" | "white";
  icon?: "right" | "no" | "left";
  type?: "secondary" | "primary" | "outline" | "text" | "text only";
  state?: "active" | "hover";
  size?: "sm" | "md" | "lg" | "xs";
  /** Text content; defaults to "প্রোগ্রামে ভর্তি হও". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "card icon/playstore" (node 1:4156)
export interface CardIconPlaystoreProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Community Card" (node 1:6052)
export interface CommunityCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "কোর্স, মেন্টর আর হাজারো শিক্ষার্থীর সাথে প্রতিদিন নতুন কিছু শেখো।". */
  text1?: string;
}

// figma layer: "Component 59" (node 1:3943)
export interface Component59Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "frame 1618873489" | "frame 1707480281" | "frame 1707480282" | "variant6" | "variant 7" | "variant 8";
}

// figma layer: "Component 6" (node 1:3660)
export interface Component6Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "1" | "2";
}

// figma layer: "Continue Watching Section" (node 1:5651)
export interface ContinueWatchingSectionProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "দেখা চালিয়ে যাও". */
  text1?: string;
}

// figma layer: "Course" (node 1:3979)
export interface CourseProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "not selected" | "selected";
  /** Text content; defaults to "কোর্স". */
  text1?: string;
}

// figma layer: "Course archive " (node 1:5788)
export interface CourseArchiveProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "কোর্স আর্কাইভ". */
  text1?: string;
}

// figma layer: "Course Program Status" (node 1:598)
export interface CourseProgramStatusProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "complete" | "locked" | "running" | "unlocked";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Day card" (node 1:156)
export interface DayCardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "not selected" | "selected";
  /** Text content; defaults to "০৫ ". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Explore" (node 1:800)
export interface ExploreProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "not selected" | "selected";
  /** Text content; defaults to "এক্সপ্লোর". */
  text1?: string;
}

// figma layer: "Facebook" (node 1:6021)
export interface FacebookProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "ফেসবুক গ্রুপে জয়েন করো". */
  text1?: string;
  /** Text content; defaults to "জয়েন করো প্রায় ৬ লক্ষ মেম্বারের গ্ৰুপে". */
  text2?: string;
}

// figma layer: "Focus Hub Banners" (node 1:2796)
export interface FocusHubBannersProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "without count" | "skeleton" | "with count";
  /** Text content; defaults to "প্রোফাইল ছবি যোগ করো". */
  text1?: string;
  /** Text content; defaults to "বন্ধুরা আর শিক্ষকরা তোমাকে সহজে চিনবে". */
  text2?: string;
  /** Text content; defaults to "2". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Focus Hub Icons" (node 1:2677)
export interface FocusHubIconsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bkash" | "daily goal" | "report card" | "streak" | "upload photo" | "streak broken";
}

// figma layer: "General Math" (node 1:5658)
export interface GeneralMathProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "General Math" (node 1:5792)
export interface GeneralMath2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Guideline Videos" (node 1:9185)
export interface GuidelineVideosProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Hero section" (node 1:3)
export interface HeroSectionProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "premium tag" | "paid" | "free" | "with search" | "without focus hub";
  /** Text content; defaults to "ক্লাস ৯ সায়েন্স - SSC '27 বার্ষিক পরীক্ষা প্রস্তুতি". */
  text1?: string;
  /** Text content; defaults to "হ্যালো, আরিয়ান  ". */
  text2?: string;
  /** Text content; defaults to "👋 ". */
  text3?: string;
  /** Text content; defaults to "ক্লাস ৯ - এসএসসি'২৭". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Home" (node 1:781)
export interface HomeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "not selected" | "selected";
  /** Text content; defaults to "হোম". */
  text1?: string;
}

// figma layer: "Home widgets" (node 1:720)
export interface HomeWidgetsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "animated lesson" | "practice quiz" | "report card widget home" | "shikho ai" | "future link";
  /** Text content; defaults to "সর্বমোট স্কোর". */
  text1?: string;
  /** Text content; defaults to "৯০%". */
  text2?: string;
  /** Text content; defaults to "রিপোর্ট কার্ড দেখো ". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "homework" (node 10:35576)
export interface HomeworkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon / arrow_right" (node 1:2790)
export interface IconArrowRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon / check_circle" (node 1:3836)
export interface IconCheckCircleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon / chevron_down" (node 1:2653)
export interface IconChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon / lock" (node 1:3853)
export interface IconLockProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "icon / most_used" (node 1:3828)
export interface IconMostUsedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icons" (node 1:2656)
export interface IconsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "notification" | "search" | "qr";
}

// figma layer: "Icons" (node 1:3868)
export interface Icons2Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: "class rank" | "total score" | "total score (3d)" | "class rank (3d)" | "grade (3d)";
}

// figma layer: "Icons" (node 1:5162)
export interface Icons3Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: "microphone" | "search" | "discovery" | "send";
}

// figma layer: "Icons" (node 1:5178)
export interface Icons4Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: "microphone" | "search" | "discovery" | "send" | "history" | "right" | "trending" | "arrow (left)" | "close" | "notebook" | "pdf" | "unlocked" | "locked" | "down";
}

// figma layer: "keyboard_arrow_right_24px" (node 1:3941)
export interface KeyboardArrowRight24pxProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Live" (node 1:3612)
export interface LiveProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "live_class" (node 1:3621)
export interface LiveClassProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Live Class Access" (node 1:8078)
export interface LiveClassAccessProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "live_mcq_test" (node 1:3669)
export interface LiveMcqTestProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Model Test" (node 1:5396)
export interface ModelTestProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Most Important class section" (node 1:5927)
export interface MostImportantClassSectionProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "মোস্ট ইম্পর্ট্যান্ট ক্লাস". */
  text1?: string;
  /** Text content; defaults to "আরও দেখো ". */
  text2?: string;
  /** Text content; defaults to "সব ". */
  text3?: string;
  /** Text content; defaults to "সাধারণ গণিত". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Physics" (node 1:5900)
export interface PhysicsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "practice_mcq_test" (node 1:5328)
export interface PracticeMcqTestProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Premium Tag" (node 1:2828)
export interface PremiumTagProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "প্রিমিয়াম". */
  text1?: string;
}

// figma layer: "Priority Subject Cards" (node 1:239)
export interface PrioritySubjectCardsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "(exam tag) class and exam pending" | "class done" | "class and exam pending" | "exam done" | "without progress bar";
  /** Text content; defaults to "সাধারণ গণিত". */
  text1?: string;
  /** Text content; defaults to "রেখা , কোণ ও ত্রিভুজ পর্ব-৩". */
  text2?: string;
  /** Text content; defaults to "ক্লাস: ". */
  text3?: string;
  /** Text content; defaults to "২/৩ ". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Profile Image Section" (node 1:3575)
export interface ProfileImageSectionProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "premium tag" | "with streak" | "without streak";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Quarter Progress Cards" (node 1:612)
export interface QuarterProgressCardsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "not admitted" | "quarter completed" | "quarter running" | "upcoming (admitted)" | "quarter running (with remaining time)";
  /** Text content; defaults to "কোয়ার্টার ১ ". */
  text1?: string;
  /** Text content; defaults to "১০০% ". */
  text2?: string;
  /** Text content; defaults to "ভর্তি হও". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "recorded_class" (node 1:3717)
export interface RecordedClassProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Recorded Class Access" (node 1:8586)
export interface RecordedClassAccessProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "report_card" (node 1:5357)
export interface ReportCardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Routine card activity chips" (node 1:185)
export interface RoutineCardActivityChipsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "chapter exam" | "recorded class" | "model test" | "homework" | "live class";
  /** Text content; defaults to "চ্যাপ্টার এক্সাম". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Routine card activity chips" (node 1:3755)
export interface RoutineCardActivityChips2Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "chapter exam" | "live class" | "model test" | "recorded class";
  /** Text content; defaults to "লেকচার ক্লাস ". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Search Field Buttons" (node 1:5241)
export interface SearchFieldButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "send" | "voice input";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Search Field State" (node 1:5272)
export interface SearchFieldStateProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "active" | "default" | "typing";
  /** Text content; defaults to "গতি সূত্র". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Search Field Text" (node 1:5247)
export interface SearchFieldTextProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "1" | "2" | "3" | "4";
  /** Text content; defaults to "সার্চ নিউটনের সূত্র ...". */
  text1?: string;
  /** Text content; defaults to "সার্চ পিথাগোরাসের উপপাদ্য ...". */
  text2?: string;
  /** Text content; defaults to "সার্চ সৌরজগতের গ্রহগুলো ...". */
  text3?: string;
  /** Text content; defaults to "সার্চ আলোর বেগ কত ...". */
  text4?: string;
}

// figma layer: "Search Hero" (node 1:1144)
export interface SearchHeroProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "with search bar" | "without search bar";
  /** Text content; defaults to "আজ কী পড়তে চাও?". */
  text1?: string;
  /** Text content; defaults to "তোমার বিষয় বা টপিক লিখো বা বলো". */
  text2?: string;
}

// figma layer: "Shikho Ai" (node 1:4011)
export interface ShikhoAiProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "not selected" | "selected";
  /** Text content; defaults to "শিখো AI". */
  text1?: string;
}

// figma layer: "Streak Peal" (node 1:3555)
export interface StreakPealProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "১৫৫ ". */
  text1?: string;
}

// figma layer: "Subject Card Progress" (node 1:1139)
export interface SubjectCardProgressProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "20" | "full" | "40" | "60" | "80" | "90";
}

// figma layer: "Subject Chapter Progress Card" (node 1:1075)
export interface SubjectChapterProgressCardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "agricultural science" | "bangla" | "biology" | "chemistry" | "english" | "history" | "math" | "physics" | "ict";
  /** Text content; defaults to "গণিত". */
  text1?: string;
  /** Text content; defaults to "৩/৮ চ্যাপ্টার সমাপ্ত". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Subject Icon" (node 1:425)
export interface SubjectIconProps {
  className?: string;
  style?: React.CSSProperties;
  iconName?: "Bangla" | "English" | "General Math" | "General Science" | "Agriculture" | "Biology" | "Business Math icon" | "Business Orga & Manage" | "Business Studies" | "Chemistry" | "Civics" | "Economics" | "Finance" | "General Knowledge" | "Geography" | "Higher math" | "History" | "ICT" | "Islam and Ethics" | "Layer_1" | "Logic" | "Marketting" | "Physics" | "Production Management icon" | "Sociology" | "accounting" | "sociology" | "statistics 1";
  /** Text content; defaults to "৳". */
  text1?: string;
}

// figma layer: "Subject Icon" (node 1:4221)
export interface SubjectIcon3Props {
  className?: string;
  style?: React.CSSProperties;
  iconName?: "Agriculture" | "Bangla" | "Biology" | "Chemistry" | "English" | "General Math" | "History" | "Physics" | "Business Math icon" | "Business Orga & Manage" | "Business Studies" | "Civics" | "Economics" | "Finance" | "General Knowledge" | "General Science" | "Geography" | "Higher math" | "ICT" | "Islam and Ethics" | "Layer_1" | "Logic" | "Marketting" | "Production Management icon" | "Sociology" | "accounting" | "sociology" | "statistics 1";
  /** Text content; defaults to "৳". */
  text1?: string;
}

// figma layer: "Subject Tag" (node 1:178)
export interface SubjectTagProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "chemistry" | "general math" | "physics";
  /** Text content; defaults to "সাধারণ গণিত". */
  text1?: string;
}

// figma layer: "Tools" (node 1:5440)
export interface ToolsProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "class" | "community" | "ebook" | "report card" | "shikho ai" | "chapter exam" | "practice quiz" | "model test" | "quarter exam";
  /** Text content; defaults to "ক্লাস ". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "unlock " (node 1:3849)
export interface UnlockProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Video Continue Watching Card" (node 1:5598)
export interface VideoContinueWatchingCardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "new" | "new with subject and teacher" | "old";
  /** Text content; defaults to "Sourav Saha". */
  text1?: string;
  /** Text content; defaults to "ফ্লো স্টেট কীভাবে জীবন বদলায়?". */
  text2?: string;
  /** Text content; defaults to "বাংলাদেশ ও বিশ্বপরিচয়". */
  text3?: string;
  /** Text content; defaults to "|". */
  text4?: string;
}

// figma layer: "Video Thumbnail" (node 1:5588)
export interface VideoThumbnailProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "biology" | "mathematics" | "popular videos 1" | "popularvideo";
  property2?: "dr. tanzim ahmed ontor" | "md. abu nayeem" | "raihan a. r khan";
}

// figma layer: "Weak chapter practice" (node 1:1191)
export interface WeakChapterPracticeProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bangla" | "biology" | "chemistry" | "math";
  /** Text content; defaults to "গণিত ". */
  text1?: string;
  /** Text content; defaults to "ত্রিকোণমিতিক অনুপাত". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Youtube" (node 1:6037)
export interface YoutubeProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "ভিডিও লাইব্রেরি দেখো". */
  text1?: string;
  /** Text content; defaults to "ফ্রি লেকচার ও টিউটোরিয়াল". */
  text2?: string;
}

declare const AdmitTag: React.FC<AdmitTagProps>;
declare const AllActivityStages: React.FC<AllActivityStagesProps>;
declare const AllTopicSection: React.FC<AllTopicSectionProps>;
declare const ArchivedCourses: React.FC<ArchivedCoursesProps>;
declare const ArrowForward24px: React.FC<ArrowForward24pxProps>;
declare const ArrowForwardIos24px: React.FC<ArrowForwardIos24pxProps>;
declare const Avatars: React.FC<AvatarsProps>;
declare const Biology: React.FC<BiologyProps>;
declare const BottomNavigation: React.FC<BottomNavigationProps>;
declare const BuildingBlocksStatusBar: React.FC<BuildingBlocksStatusBarProps>;
declare const Button2: React.FC<Button2Props>;
declare const CardIconPlaystore: React.FC<CardIconPlaystoreProps>;
declare const CommunityCard: React.FC<CommunityCardProps>;
declare const Component59: React.FC<Component59Props>;
declare const Component6: React.FC<Component6Props>;
declare const ContinueWatchingSection: React.FC<ContinueWatchingSectionProps>;
declare const Course: React.FC<CourseProps>;
declare const CourseArchive: React.FC<CourseArchiveProps>;
declare const CourseProgramStatus: React.FC<CourseProgramStatusProps>;
declare const DayCard: React.FC<DayCardProps>;
declare const Explore: React.FC<ExploreProps>;
declare const Facebook: React.FC<FacebookProps>;
declare const FocusHubBanners: React.FC<FocusHubBannersProps>;
declare const FocusHubIcons: React.FC<FocusHubIconsProps>;
declare const GeneralMath: React.FC<GeneralMathProps>;
declare const GeneralMath2: React.FC<GeneralMath2Props>;
declare const GuidelineVideos: React.FC<GuidelineVideosProps>;
declare const HeroSection: React.FC<HeroSectionProps>;
declare const Home: React.FC<HomeProps>;
declare const HomeWidgets: React.FC<HomeWidgetsProps>;
declare const Homework: React.FC<HomeworkProps>;
declare const IconArrowRight: React.FC<IconArrowRightProps>;
declare const IconCheckCircle: React.FC<IconCheckCircleProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconLock: React.FC<IconLockProps>;
declare const IconMostUsed: React.FC<IconMostUsedProps>;
declare const Icons: React.FC<IconsProps>;
declare const Icons2: React.FC<Icons2Props>;
declare const Icons3: React.FC<Icons3Props>;
declare const Icons4: React.FC<Icons4Props>;
declare const KeyboardArrowRight24px: React.FC<KeyboardArrowRight24pxProps>;
declare const Live: React.FC<LiveProps>;
declare const LiveClass: React.FC<LiveClassProps>;
declare const LiveClassAccess: React.FC<LiveClassAccessProps>;
declare const LiveMcqTest: React.FC<LiveMcqTestProps>;
declare const ModelTest: React.FC<ModelTestProps>;
declare const MostImportantClassSection: React.FC<MostImportantClassSectionProps>;
declare const Physics: React.FC<PhysicsProps>;
declare const PracticeMcqTest: React.FC<PracticeMcqTestProps>;
declare const PremiumTag: React.FC<PremiumTagProps>;
declare const PrioritySubjectCards: React.FC<PrioritySubjectCardsProps>;
declare const ProfileImageSection: React.FC<ProfileImageSectionProps>;
declare const QuarterProgressCards: React.FC<QuarterProgressCardsProps>;
declare const RecordedClass: React.FC<RecordedClassProps>;
declare const RecordedClassAccess: React.FC<RecordedClassAccessProps>;
declare const ReportCard: React.FC<ReportCardProps>;
declare const RoutineCardActivityChips: React.FC<RoutineCardActivityChipsProps>;
declare const RoutineCardActivityChips2: React.FC<RoutineCardActivityChips2Props>;
declare const SearchFieldButtons: React.FC<SearchFieldButtonsProps>;
declare const SearchFieldState: React.FC<SearchFieldStateProps>;
declare const SearchFieldText: React.FC<SearchFieldTextProps>;
declare const SearchHero: React.FC<SearchHeroProps>;
declare const ShikhoAi: React.FC<ShikhoAiProps>;
declare const StreakPeal: React.FC<StreakPealProps>;
declare const SubjectCardProgress: React.FC<SubjectCardProgressProps>;
declare const SubjectChapterProgressCard: React.FC<SubjectChapterProgressCardProps>;
declare const SubjectIcon: React.FC<SubjectIconProps>;
declare const SubjectIcon3: React.FC<SubjectIcon3Props>;
declare const SubjectTag: React.FC<SubjectTagProps>;
declare const Tools: React.FC<ToolsProps>;
declare const Unlock: React.FC<UnlockProps>;
declare const VideoContinueWatchingCard: React.FC<VideoContinueWatchingCardProps>;
declare const VideoThumbnail: React.FC<VideoThumbnailProps>;
declare const WeakChapterPractice: React.FC<WeakChapterPracticeProps>;
declare const Youtube: React.FC<YoutubeProps>;
declare global {
  interface Window {
    AdmitTag: React.FC<AdmitTagProps>;
    AllActivityStages: React.FC<AllActivityStagesProps>;
    AllTopicSection: React.FC<AllTopicSectionProps>;
    ArchivedCourses: React.FC<ArchivedCoursesProps>;
    ArrowForward24px: React.FC<ArrowForward24pxProps>;
    ArrowForwardIos24px: React.FC<ArrowForwardIos24pxProps>;
    Avatars: React.FC<AvatarsProps>;
    Biology: React.FC<BiologyProps>;
    BottomNavigation: React.FC<BottomNavigationProps>;
    BuildingBlocksStatusBar: React.FC<BuildingBlocksStatusBarProps>;
    Button2: React.FC<Button2Props>;
    CardIconPlaystore: React.FC<CardIconPlaystoreProps>;
    CommunityCard: React.FC<CommunityCardProps>;
    Component59: React.FC<Component59Props>;
    Component6: React.FC<Component6Props>;
    ContinueWatchingSection: React.FC<ContinueWatchingSectionProps>;
    Course: React.FC<CourseProps>;
    CourseArchive: React.FC<CourseArchiveProps>;
    CourseProgramStatus: React.FC<CourseProgramStatusProps>;
    DayCard: React.FC<DayCardProps>;
    Explore: React.FC<ExploreProps>;
    Facebook: React.FC<FacebookProps>;
    FocusHubBanners: React.FC<FocusHubBannersProps>;
    FocusHubIcons: React.FC<FocusHubIconsProps>;
    GeneralMath: React.FC<GeneralMathProps>;
    GeneralMath2: React.FC<GeneralMath2Props>;
    GuidelineVideos: React.FC<GuidelineVideosProps>;
    HeroSection: React.FC<HeroSectionProps>;
    Home: React.FC<HomeProps>;
    HomeWidgets: React.FC<HomeWidgetsProps>;
    Homework: React.FC<HomeworkProps>;
    IconArrowRight: React.FC<IconArrowRightProps>;
    IconCheckCircle: React.FC<IconCheckCircleProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconLock: React.FC<IconLockProps>;
    IconMostUsed: React.FC<IconMostUsedProps>;
    Icons: React.FC<IconsProps>;
    Icons2: React.FC<Icons2Props>;
    Icons3: React.FC<Icons3Props>;
    Icons4: React.FC<Icons4Props>;
    KeyboardArrowRight24px: React.FC<KeyboardArrowRight24pxProps>;
    Live: React.FC<LiveProps>;
    LiveClass: React.FC<LiveClassProps>;
    LiveClassAccess: React.FC<LiveClassAccessProps>;
    LiveMcqTest: React.FC<LiveMcqTestProps>;
    ModelTest: React.FC<ModelTestProps>;
    MostImportantClassSection: React.FC<MostImportantClassSectionProps>;
    Physics: React.FC<PhysicsProps>;
    PracticeMcqTest: React.FC<PracticeMcqTestProps>;
    PremiumTag: React.FC<PremiumTagProps>;
    PrioritySubjectCards: React.FC<PrioritySubjectCardsProps>;
    ProfileImageSection: React.FC<ProfileImageSectionProps>;
    QuarterProgressCards: React.FC<QuarterProgressCardsProps>;
    RecordedClass: React.FC<RecordedClassProps>;
    RecordedClassAccess: React.FC<RecordedClassAccessProps>;
    ReportCard: React.FC<ReportCardProps>;
    RoutineCardActivityChips: React.FC<RoutineCardActivityChipsProps>;
    RoutineCardActivityChips2: React.FC<RoutineCardActivityChips2Props>;
    SearchFieldButtons: React.FC<SearchFieldButtonsProps>;
    SearchFieldState: React.FC<SearchFieldStateProps>;
    SearchFieldText: React.FC<SearchFieldTextProps>;
    SearchHero: React.FC<SearchHeroProps>;
    ShikhoAi: React.FC<ShikhoAiProps>;
    StreakPeal: React.FC<StreakPealProps>;
    SubjectCardProgress: React.FC<SubjectCardProgressProps>;
    SubjectChapterProgressCard: React.FC<SubjectChapterProgressCardProps>;
    SubjectIcon: React.FC<SubjectIconProps>;
    SubjectIcon3: React.FC<SubjectIcon3Props>;
    SubjectTag: React.FC<SubjectTagProps>;
    Tools: React.FC<ToolsProps>;
    Unlock: React.FC<UnlockProps>;
    VideoContinueWatchingCard: React.FC<VideoContinueWatchingCardProps>;
    VideoThumbnail: React.FC<VideoThumbnailProps>;
    WeakChapterPractice: React.FC<WeakChapterPracticeProps>;
    Youtube: React.FC<YoutubeProps>;
  }
}
