import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "@/components/ui/blur-fade";

function NotesFaqAccordion() {
  return (
    <article className="mx-auto space-y-4 pb-20 text-primary md:w-[80%]">
      <Accordion type="single" collapsible className="w-full space-y-3">
        <BlurFade delay={0.5} inView>
          <AccordionItem
            className="rounded-2xl border bg-white px-3 py-1"
            value="item-1"
          >
            <AccordionTrigger className="text-lg">
              What is GS Notes?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              GS Notes is a digital note-taking and productivity app designed to
              help you organize and manage your thoughts, tasks, and projects
              efficiently. It allows you to create, edit, and share notes
              seamlessly.
            </AccordionContent>
          </AccordionItem>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <AccordionItem
            className="rounded-2xl border bg-white px-3 py-1"
            value="item-2"
          >
            <AccordionTrigger className="text-lg">
              How does GS Notes help improve productivity?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              GS Notes helps you stay organized by allowing you to create custom
              notebooks, set reminders, and categorize your notes. It integrates
              with task management tools to streamline your workflow and keep
              you on track.
            </AccordionContent>
          </AccordionItem>
        </BlurFade>

        <BlurFade delay={0.7} inView>
          <AccordionItem
            className="rounded-2xl border bg-white px-3 py-1"
            value="item-3"
          >
            <AccordionTrigger className="text-lg">
              Can I sync GS Notes across multiple devices?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes! GS Notes offers cloud syncing, ensuring your notes are always
              up-to-date across all your devices, whether you’re on your phone,
              tablet, or desktop.
            </AccordionContent>
          </AccordionItem>
        </BlurFade>

        <BlurFade delay={0.8} inView>
          <AccordionItem
            className="rounded-2xl border bg-white px-3 py-1"
            value="item-4"
          >
            <AccordionTrigger className="text-lg">
              Is GS Notes secure and private?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Absolutely. GS Notes employs end-to-end encryption to protect your
              data. We value your privacy and ensure that only you have access
              to your notes and documents.
            </AccordionContent>
          </AccordionItem>
        </BlurFade>

        <BlurFade delay={0.9} inView>
          <AccordionItem
            className="rounded-2xl border bg-white px-3 py-1"
            value="item-5"
          >
            <AccordionTrigger className="text-lg">
              Can I collaborate with others using GS Notes?
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes, GS Notes allows you to share your notes and collaborate with
              colleagues or friends. You can leave comments, make edits, and
              organize notes together in real-time.
            </AccordionContent>
          </AccordionItem>
        </BlurFade>
      </Accordion>
    </article>
  );
}

export default NotesFaqAccordion;
