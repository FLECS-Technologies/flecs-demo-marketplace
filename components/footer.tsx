import Link from "next/link";
import { Github, Linkedin, Youtube } from "lucide-react";

const footerSections = {
  solutions: [
    { name: "PLC Manufacturers", href: "/solutions/plc-manufacturers" },
    { name: "Machine Manufacturers", href: "/solutions/machine-manufacturers" },
    { name: "App Vendors", href: "/solutions/app-vendors" },
  ],
  marketplace: [
    { name: "FLECS License", href: "/marketplace/license" },
    { name: "Apps", href: "/marketplace/apps" },
    { name: "Systems", href: "/marketplace/systems" },
    { name: "Services & Support", href: "/marketplace/support" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Verified Device Program", href: "/verified-devices" },
    { name: "Documentation", href: "/docs" },
    { name: "My Account", href: "/account" },
  ],
  company: [
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "General Terms and Conditions", href: "/terms" },
    { name: "Payment Methods", href: "/payment" },
    { name: "Contact", href: "/contact" },
    { name: "Imprint", href: "/imprint" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/flecs-technologies",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@flecstechnologies",
    icon: Youtube,
  },
  {
    name: "GitHub",
    href: "https://github.com/FLECS-Technologies",
    icon: Github,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerSections.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Marketplace</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerSections.marketplace.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerSections.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerSections.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6">Follow Us</h3>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {footerSections.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs leading-5 text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              Copyright © {new Date().getFullYear()} FLECS Technologies GmbH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}