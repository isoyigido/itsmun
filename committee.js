const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");

document.querySelectorAll("#card-image").forEach(image => {
    image.addEventListener("click", (e) => {
        const committeeName = e.target.dataset.committee;

        popupTitle.textContent = committeeName;
        popupDescription.textContent = getCommitteeDescription(committeeName);

        popup.style.display = "flex";
    });
});

popupClose.addEventListener("click", () => {
    popup.style.display = "none";
});

function getCommitteeDescription(committeeName) {
    const descriptions = {
        "CSW": "A sub body of the Economic and Social Council (ECOSOC) established in June 21 1946, The Commision on the Status of Women (CSW) is one of the most universal entities tackling gender inequality, and mistreatment of women in the world. The goal of the Commision is to de-radicalize feminism, and introduce its universal laws of equality for both genders, while uplifting primarily women who have fallen under misconduct in said scala to achieve total gender opportunity. The Commission's works primarily consists of documentation of female experiences around the world, creating mandates against inequality; and most importantly organizing The World Conference on Women.",
        "IMF": "Operating national economic stability under the Russian-Ukraine war during European recession: The International Monetary Fund (IMF), adopted after the Great Depression in 1944, is a United Nations body in charge of economic prosperity in Member States backed by its quotas taxed after becoming a Member State. It’s used as a budgetary guidance tool by Member States to support other countries or dire situations under recession, and has been actively involved in handling economic prosperity for nearly a century. The governors of the International Monetary Fund are branched out based on the local financial ambassadors of Member States governments, and central governors chosen by the United Nations. Its aid stretches out to every 191 countries within the United Nations, and it holds research facilities to datamine future economic growth or recessions based on fiscal policies.",
        "UNSC": "Minimizing the impact of the ongoing violence and humanitarian crisis in Palestine on the trade market: The United Nations Security Council (UNSC) is one of the main organs of the United Nations established by the United Nations Charter. Its organization was with the official establishment of the United Nations but its debut is recorded as its first session in Westminster, London January 17 1946. One of the strongest global bodies in the world, the United States Security Council has four distinct purposes they’ve set: maintain peace, develop relations amongst nations, promote human rights, and harmonize actions. These goals are backed by strong legislative power, and important mandates in order to ensure worldwide security. It’s biggest ratified body of work is devoted to the Geneva Conventions, 1949-1951.",
        "EUMC": "Due to recent threats stemming from diplomatic refusals triggering continuous radicalized Russian propaganda and force; planning changes to the NATO security fund distribution, and discussing new memberships to preserve countries on a larger scale: The European Union Military Committee (EUMC) is the biggest military body in protocol set by the European Council in 2001. It's the foreground of military consultation for Member States within the European Council, and serves as a base for military operations aiming to execute operations opposing the Council. It is composed of the Chiefs of Defence from every respective Council Member. It works closely with the Political and Security Committee by providing military feedback, and organizes Initiative Feedback in cases of emergencies requested by the Political and Security Committee.",
        "CoEU": "Immigrant Crisis in West Europe: The Council of the EU, or the Council, is the European decision maker for the Union. First established in 1949, London; it has since been the main body branching out European organs in assistance to the Union, much like a reign. It holds key operations for all 27 European Member States and mandates European legislations, and redirects policies for every Member State. Its significance stems from holding the entirety of Europe as one for geopolitical union, therefore it counsels international agreements on behalf of the entire continent. It coordinates every European policy to coexist as one, and adopts the European budget all while working hand in hand with the European Commision, and the European Parliament.",
        "HOC": "Princess Diana's Death: The House of Commons (HoC) is one of the two main bodies of the United Kingdom Parliament. It is composed of government ambassadors and the opposing parties. Set back in the 14th century, after the agreement to the Magna Carta; the merchant class and lower knights were given an audience by Edward III called the House of Commons. Divided from the House of Lords, which are nobles who check policies for the King, the House of Commons was a voice for the people who demanded rights and questioned the King. After fatal changes in the United Kingdom political climate, accepting democracy, and the House of Lords disbanding from a monarchy; the House of Commons is now made up of the government party, and the other parties in the United Kingdom. In the United Kingdom Parliament, citizens vote for their preferred party in elections; the parties with the most votes make up the government, and the Prime Minister. The government party and the parties which didn’t win in the elections then come together in the House of Commons, and discuss policies. The government is questioned about their legislative choices by the parties which didn’t win the election, and discuss common ground for law between the government party and the opposing parties.",
        "CRISIS": "The Joint Crisis Committee (JCC) is a simulated council composed of individual members from the times political power to enact against crises involving their political structure. It’s main goal in modelled United Nation conferences is to recreate certain moments in history, and reenact it to write a different timeline of the historic happening in the framework of the crisis council. It paints the question of how certain political figures would work together if they were to be put in a room together and were told to prevent a political crisis against a different block."
    };
    
    return descriptions[committeeName] || "No description available.";
}
