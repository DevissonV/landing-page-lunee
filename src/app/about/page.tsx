import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter } = data;
  const { title, image } = frontmatter;

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="h3 mb-6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
