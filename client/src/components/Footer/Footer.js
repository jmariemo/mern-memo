import { footerData } from "./footerData";

function Footer() {
  return (
    <div className="bottom-0 z-10 text-green md:text-white bg-white md:bg-green">
      <div className="flex flex-col md:flex-row p-3 text-center md:justify-end ">
        <div className="font-display text-md">scheduleSquad 2023</div>
        <div className="flex flex-col mt-2 md:mt-0">
          {footerData.map((teammate) => (
            <div>
              <a
                href={teammate.gitHubLink}
                className="text-green md:text-white hover:text-tangerine p-2"
                target="blank"
              >
                {teammate.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default Footer;
