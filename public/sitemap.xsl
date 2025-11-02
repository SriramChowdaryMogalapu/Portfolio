<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap - Sriram Chowdary Mogalapu Portfolio</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        font-size: 13px;
                        color: #333;
                        background: #f8f9fa;
                        margin: 0;
                        padding: 20px;
                    }
                    .header {
                        background: #fff;
                        border: 1px solid #e1e4e8;
                        border-radius: 6px;
                        padding: 20px;
                        margin-bottom: 20px;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    }
                    .header h1 {
                        margin: 0 0 10px 0;
                        color: #24292e;
                        font-size: 24px;
                    }
                    .header p {
                        margin: 5px 0;
                        color: #586069;
                    }
                    .sitemap-table {
                        background: #fff;
                        border: 1px solid #e1e4e8;
                        border-radius: 6px;
                        overflow: hidden;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 12px 16px;
                        text-align: left;
                        border-bottom: 1px solid #e1e4e8;
                    }
                    th {
                        background: #f6f8fa;
                        font-weight: 600;
                        color: #24292e;
                    }
                    tr:hover {
                        background: #f6f8fa;
                    }
                    .url {
                        color: #0366d6;
                        text-decoration: none;
                        word-break: break-all;
                    }
                    .url:hover {
                        text-decoration: underline;
                    }
                    .priority {
                        font-weight: bold;
                    }
                    .high { color: #28a745; }
                    .medium { color: #ffd700; }
                    .low { color: #6f42c1; }
                    .footer {
                        margin-top: 20px;
                        padding: 20px;
                        background: #fff;
                        border: 1px solid #e1e4e8;
                        border-radius: 6px;
                        text-align: center;
                        color: #586069;
                    }
                    .stats {
                        display: flex;
                        justify-content: space-around;
                        margin: 20px 0;
                    }
                    .stat {
                        text-align: center;
                    }
                    .stat-number {
                        font-size: 24px;
                        font-weight: bold;
                        color: #0366d6;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>XML Sitemap</h1>
                    <p><strong>Website:</strong> Sriram Chowdary Mogalapu Portfolio</p>
                    <p><strong>URL:</strong> https://sriram-chowdary.netlify.app</p>
                    <p>This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs and was generated on <strong>November 2, 2024</strong>.</p>
                    
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                            <div>Total URLs</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url/image:image)"/></div>
                            <div>Images</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">5</div>
                            <div>Pages</div>
                        </div>
                    </div>
                </div>

                <div class="sitemap-table">
                    <table>
                        <thead>
                            <tr>
                                <th>URL Location</th>
                                <th>Last Modified</th>
                                <th>Change Frequency</th>
                                <th>Priority</th>
                                <th>Images</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td>
                                        <a href="{sitemap:loc}" class="url">
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td>
                                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="sitemap:changefreq"/>
                                    </td>
                                    <td>
                                        <span class="priority">
                                            <xsl:attribute name="class">
                                                <xsl:choose>
                                                    <xsl:when test="sitemap:priority = '1.0'">priority high</xsl:when>
                                                    <xsl:when test="sitemap:priority &gt; '0.7'">priority medium</xsl:when>
                                                    <xsl:otherwise>priority low</xsl:otherwise>
                                                </xsl:choose>
                                            </xsl:attribute>
                                            <xsl:value-of select="sitemap:priority"/>
                                        </span>
                                    </td>
                                    <td>
                                        <xsl:value-of select="count(image:image)"/>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>

                <div class="footer">
                    <p>Generated by Sriram Chowdary Mogalapu Portfolio SEO System</p>
                    <p>This XML sitemap is used by search engines to better index this website.</p>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>