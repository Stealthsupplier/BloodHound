const References = () => {
    let text = `
    <a href="https://attack.mitre.org/techniques/T1098/">ATT&CK T1098: Account Manipulation</a>
    <a href="https://medium.com/p/74aee1006f48">Andy Robbins - Azure Privilege Escalation via Azure API Permissions Abuse</a>
    <a href="https://docs.microsoft.com/en-us/graph/permissions-reference">Microsoft Graph Permission Reference</a>`
    ;
    return { __html: text };
};

export default References;
