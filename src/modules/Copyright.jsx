import { createDate } from "../utils/date.js";

const CopyrightSection = () => {
    return (
        <div className="footer__div">
            <p className="footer__text">
                <i>
                    <b>&copy;</b> {createDate()} • All rights reserved
                </i>{" "}
                •{" "}
                <i>
                    Developed by <a href="https://github.com/fxhxyz4/law-org">fxhxyz</a>
                </i>
            </p>
        </div>
    );
};

export default CopyrightSection;
