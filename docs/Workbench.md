---
layout: default
title: Workbench
nav_order: 4
---

# Workbench
{: .fs-9 .no_toc }

---

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Introduction

Welcome to **Workbench**, the dynamic and user-centric tool tailored to empower E-Commerce websites with the robust capabilities of the Unbxd JS SDK. In a world where online shopping experiences continually evolve, the Workbench stands as your key to unlocking the potential of the Unbxd JS SDK, ensuring your digital storefront remains at the forefront of innovation and user satisfaction.

Workbench represents a unified command center designed to seamlessly integrate and optimize the features offered by the SDK. It's a bridge between your development team's vision and the enhanced user experience your customers deserve. This intuitive interface empowers you to configure and fine-tune every feature of your platform with ease.

---

# Purpose and Goals

1. **Effortless Integration**: Workbench streamlines the integration process, simplifying complex tasks for your development team. With easy-to-follow instructions and comprehensive documentation, you can swiftly configure and tailor the SDK's features to suit your website.

2. **Personalized User Experience**: Recognizing that no two E-Commerce businesses are the same, Workbench provides you with extensive customization options. Whether you're optimizing search functionality, fine-tuning product displays, or enhancing filtering choices, this platform allows you to tailor your website's features precisely to your brand identity and business objectives.

3. *e*User-Centric Design**: Workbench empowers you to create an engaging and user-friendly environment, enabling the users to easily make customisations, preview the customisations and debug any errors simultaneously.

4. **Precision and Efficiency**: From configuring pagination and sorting to managing swatches and banners, Workbench grants you the power to fine-tune every aspect of your website's functionality with precision and efficiency.

5. **Responsive and High-Performance**: We understand the vital importance of website performance and responsiveness. Workbench ensures that your customizations are optimized for speed and functionality, providing a top-tier user experience across all devices.

6. **Future-Ready**: E-Commerce is an ever-evolving landscape, and Workbench is designed to adapt to industry trends and customer expectations seamlessly. Your website will stay relevant and competitive as you leverage its future-proof capabilities.

7. **Collaborative Development**: Workbench fosters collaboration between your design, development, and marketing teams. It simplifies communication, making it easier to turn your vision into a reality. Want to take a break? Just save your changes, come back later and continue where you left off!

---

# Getting Started with Workbench

## Adding New Integrations

The Workbench makes new integrations easy by initially providing you with few default configurations. These configurations can be viewed on the left hand side panel. These configurations have been applied onto the demo site provided on the right hand side. To create the configurations, follow the below steps:

- Scope the requirements of the customer. Find out what features the SDK needs to provide.
- Make sure the correct SDK version has been selected. This can viewed in the dropdown present in the header. 
- Fill the configurations in the left side panel, module by module. 
    - The `siteKey` and `apiKey` combination must be correct and must have a product feed.
    - The elements should not be changed, since these are the elements on the right side demo site, on which the configurations are applied. 
    - For few templates, usecase options have been provided in the dropdown. These can be selected as per the requirement. In case you want to input your own code, select the **'Enter Custom Code'** option and click on **View Code** to open the editor. 
    - If you are not able to understand any configuration of a module, click on the **Know More** button in the module header to navigate to the documentation for that module. 
    - Click on **Apply Changes** to apply the configurations to the demo site.
    - If the configurations are proper, the changes can be viewed on the demo site. In case you want to change the configurations again, you can change the configurations and click on **Apply Changes** button to view the changes immediately. 
    - If the configurations are not proper, a small red icon will be present in the header. On clicking this, you can view the number of errors, as well as the details of which module and configuration has given the error. 
- These configurations can be saved by clicking on the **'Save Changes'** button in the top-right corner. Give a name to your project and click on 'Save Changes'. You can also give an image to be shown on the demo site instead of the default image. 
- If the save is successful, you will be shown a preview link to the demo site with the saved configurations applied to it. On closing this modal, you will be redirected to the builder link, wherein these saved configurations are applied to the demo site.

The Workbench ensures every feature required by the user is fulfilled by the SDK. 

---

## Debugging your configurations

The Workbench can be used to debug any issues related to the customer's configurations or the Unbxd JS SDK. If the customer is a JS SDK customer, fill the left hand panel with the customer's configurations, apply the changes onto the demo site and follow the below steps:

- Make sure the customer is an SDK Integration customer, and not an API Integration customer. 
- Check the version which the customer uses. If it is not the latest version, select the latest version and check if the problem persists. If the problem does not persist, ask the customer to upgrade SDK version.
- Check the search API payload and response. Check if there are any extra parameters in the payload/config.
- Check if any errors are thrown by the SDK in the errors dropdown. In case there are any errors, the exact module and and configuration which produces this error is mentioned.
- Check if there are any overwritings for the SDK methods. If yes, check if the configurations work without the overwritings.

---

## Creating Demo Sites for POC

Creating demo sites for certain usecases is very easy using the Workbench. Follow the below steps to create the demo site for a particular usecase:

- Select the SDK version using which you want to create the demo site.
- Navigate to the module(s) and configuration(s) pertaining to the usecase for which you want to create the demo site.
- Modify the configuration(s) as per the need. 
- Click on the **'Apply Changes'** button. Make sure the demo site reflects the required usecase.
- Click on the **'Save Changes'** button. Give a name to your project. You can also give an image to be shown on the demo site as a personal touch. Click on 'Save Changes'.
- If the save is successful, you will be given a preview link to the demo site with these configurations applied to it. 
- This link serves as a POC for that usecase.

---

## Save and Generate Preview Links

You can save multiple sets of configurations using the Workbench by giving them different project names. Follow the below steps to save and generate different preview links:

- Select the SDK version.
- Enter the configurations in the left hand side panel as per the requirement. 
- Click on the **'Apply Changes'** button.
- If all the configurations have been applied onto the demo site, click on the **'Save Changes'** button. Give a name to your project. You can also give an image to be shown on the demo site as a personal touch. Click on 'Save Changes'.
- If the save is successful, you will be given a preview link to the demo site with these configurations applied to it.
- If you want to create another demo site:
    - And if you are on the Default Builder Page, follow the steps mentioned above.
    - And if you are on a builder page which has another set of configurations applied to the demo site:
        - Make sure the correct SDK has been selected.
        - Make the required changes to the already defined configurations.
        - Click on the **'Apply Changes'** button.
        - If all the new configurations have been applied onto the demo site, click on the **'Save Changes'** button. Give a name to your project. You can also give an image to be shown on the demo site. Click on 'Save Changes'.
        - If the save is successful, you will be given a preview link to the demo site with the new configurations applied to it.