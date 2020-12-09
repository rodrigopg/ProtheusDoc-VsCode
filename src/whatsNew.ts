
// tslint:disable-next-line:max-line-length
import { ChangeLogItem, ChangeLogKind, ContentProvider, Header, Image, Sponsor } from "./vscode-whats-new/ContentProvider";

export class WhatsNewDocContentProvider implements ContentProvider {

    public provideHeader(logoUrl: string): Header {
        return <Header>{
            logo: <Image>{ src: logoUrl, height: 50, width: 50 },
            message: `<b>ProtheusDoc for VsCode</b> é uma extensão de suporte aos recursos e snippets de documentação TOTVS ProtheusDoc para VsCode.
                      Ela detecta a sintaxe da função, método ou classe e gera uma documentação dinâmica no formato ProtheusDoc. 
                      Saiba mais <a href="https://gabrielalencar.dev/2020/01/29/ProtheusDoc-for-VsCode/">neste post</a>.`,
            notice: `Agora as documentações ProtheusDoc serão diagnosticadas! Caso estejam em desacordo com a convenção, Warnings serão apresentados.
                     <a href="https://github.com/AlencarGabriel/ProtheusDoc-VsCode/wiki/Diagnóstico-das-documentações">Saiba mais</a>.`};
    }

    public provideChangeLog(): ChangeLogItem[] {
        const changeLog: ChangeLogItem[] = [];
        
        changeLog.push({
            kind: ChangeLogKind.NEW, message: `Implementado <b>Diagnóstico</b> das documentações ProtheusDoc - (<a title=\"Open Pull Request #43\" 
                href=\"https://github.com/AlencarGabriel/ProtheusDoc-VsCode/pull/43\">PR #43</a> | <a title=\"Documentação da Feature\"
                href=\"https://github.com/AlencarGabriel/ProtheusDoc-VsCode/wiki/Diagnóstico-das-documentações\">Documentação</a>)`
        });

        changeLog.push({
            kind: ChangeLogKind.CHANGED, message: `Extensão não deixa VsCode apresentar as palavras do editor - (<a title=\"Open Issue #36\" 
                href=\"https://github.com/AlencarGabriel/ProtheusDoc-VsCode/issues/36\">Issue #36</a>)`
        });

        changeLog.push({
            kind: ChangeLogKind.FIXED, message: `Atributo History quebrando texto com "*" ou ":" no Hover - (<a title=\"Open Issue #32\" 
                href=\"https://github.com/AlencarGabriel/ProtheusDoc-VsCode/issues/32\">Issue #32</a>)`
        });

        return changeLog;
    }

    public provideSponsors(): Sponsor[] {
        const sponsors: Sponsor[] = [];
        // const sponsorCodeStream: Sponsor = <Sponsor>{
        //     title: "Try Codestream",
        //     link: "https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=bookmarks&utm_medium=banner",
        //     image: "https://alt-images.codestream.com/codestream_logo_bookmarks.png",
        //     width: 35,
        //     message: `<p>Discussing code is now as easy as highlighting a block and typing a comment right 
        //               from your IDE. Take the pain out of code reviews and improve code quality.</p>`,
        //     extra:
        //         `<a title="Try CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=bookmarks&utm_medium=banner">
        //          Try it free</a>`
        // };
        // sponsors.push(sponsorCodeStream);
        return sponsors;
    }

}